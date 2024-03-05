class Course {
  baseURL = "http://localhost:2000";
  course = {};
  questions = {};
  error = "";

  async init(id) {
    await this.getCourse(id);
    await this.getQuestion();
    await this.getChoiceAndJustify();
  }

  // Função para converter buffer para base64
  arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  getCourseObject() {
    const courseReturn = this.course.course;
    courseReturn.questions = this.questions;

    return courseReturn;
  }

  async getCourse(idCourse) {
    await this.getAxios("courses/" + idCourse)
      .then((r) => {
        this.course = r;
      })
      .catch((error) => {
        console.error("Erro:", error);
        this.error = error;
      });
  }

  async getQuestion() {
    await this.getAxiosUrl(this.course.questions)
      .then((r) => {
        this.questions = r;
      })
      .catch((error) => {
        this.questions = [];
        this.error = error;
      });
  }

  async getChoiceAndJustify() {
    for (const question of this.questions) {
      const choices = [];
      for (const choice of question.choices) {
        if (choice.search("null") === -1) {
          const choiceFinded = await this.getChoice(choice);
          choiceFinded.justifyChoice = await this.getJustifyChoice(
            choiceFinded.justifyChoice
          );
          choices.push(choiceFinded);
        }
      }

      question.choices = choices;
    }
  }

  async getChoice(url) {
    const choice = await this.getAxiosUrl(url)
      .then((r) => {
        return r;
      })
      .catch((error) => {
        console.error("Erro:", error);
        this.error = error;
      });

    return choice;
  }

  async getJustifyChoice(url) {
    if (url == undefined) {
      return undefined;
    }
    const choice = await this.getAxiosUrl(url)
      .then((r) => {
        return r;
      })
      .catch((error) => {
        console.error("Erro:", error);
        this.error = error;
      });

    return choice;
  }

  async getAxios(endpoint) {
    try {
      const response = await axios.get(`${this.baseURL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição GET:", error);
      throw error;
    }
  }

  async update(course) {
    try {
      const response = await axios.post(
        `${this.baseURL}/portable/update`,
        course,
        {
          headers: {
            Authorization: "Bearer 123",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro na requisição POST:", error);
      throw error;
    }
  }

  async getAxiosUrl(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição GET:", error);
      throw error;
    }
  }
}
