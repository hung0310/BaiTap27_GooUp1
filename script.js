function mockFunction(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(flag) 
        resolve('OKE');
      else 
        reject('NO OKE');
    }, 1000);
  })
}

mockFunction(true) 
  .then(result => {
    alert(result);
    return mockFunction(true);
  }) .then(result => {
    alert(result);
    return mockFunction(false);
  }) .then(result => {
    alert(result);
  }) .catch (error => {
    alert(error);
  });