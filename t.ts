const a = 0;

function Ola(): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    if (a == 0) {
      resolve('Olá');
    } else {
      reject('se fuder');
    }
  });
}

function init(): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    Ola().then((r) => {
      resolve(r);
    });
  });
}

init().then((r) => {
  console.log(r);
});
