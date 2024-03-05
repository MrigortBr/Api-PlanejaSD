class Requests {
  course = "";

  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}/${endpoint}`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Erro na requisição GET:", error);
      throw error;
    }
  }

  async getAllCourse(idCourse) {
    await this.get("courses/" + idCourse)
      .then(async (course) => {
        this.course = course;
      })
      .catch((error) => console.error("Erro:", error));

    await this.getQuestionCourse(this.course).then((questions) => {
      this.course.questions = questions;
    });

    const questions = await this.getChoiceQuestions(this.course.questions);

    const courseReturn = this.course.course;
    courseReturn.questions = questions;

    return courseReturn;
  }

  async getQuestionCourse(CourseObject) {
    try {
      const response = await axios.get(`${CourseObject.questions}`);
      return response.data;
    } catch (error) {}
  }

  async getChoiceQuestions(questions) {
    for (const question of questions) {
      const choices = await this.analyzeChoice(question.choices);
      question.question.choices = choices;
      delete question.choices;
    }

    return questions;
  }

  async getChoice(choice) {
    try {
      const response = await axios.get(choice);
      return response.data;
    } catch (error) {}
  }

  async analyzeChoice(choices) {
    const choicesFinded = [];
    for (const choice of choices) {
      await this.getChoice(choice).then((r) => {
        choicesFinded.push(r);
      });
    }
    return choicesFinded;
  }

  async analyzeJustifyChoice() {}
}
