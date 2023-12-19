   document.addEventListener('DOMContentLoaded', function() {
        const loadEl = document.querySelector('#load');
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
        // firebase.firestore().doc('/foo/bar').get().then(() => { });
        // firebase.functions().httpsCallable('yourFunction')().then(() => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        // firebase.analytics(); // call to activate
        // firebase.analytics().logEvent('tutorial_completed');
        // firebase.performance(); // call to activate
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


        // Найдите кнопку, к которой хотите добавить обработчик события
const saveButton = document.getElementById('saveBtn'); // Замените 'yourSaveButtonId' на ID вашей кнопки сохранения

// Добавьте обработчик события
saveButton.addEventListener('click', saveDataToFirebase);

      // Обработка отправки формы
      function saveDataToFirebase() {
      const db = firebase.database();
      const important = document.getElementById('important').checked;
      const control = document.getElementById('control').checked;
      const notcontrol = document.getElementById('notcontrol').checked;
      const paper = document.getElementById('paper').checked;
      const foruse = document.getElementById('foruse').checked;
      const dir = document.getElementById('dir').checked;
      const corres = document.getElementById('corres').checked;
      const answer = document.getElementById('answer').checked;
      // Здесь получите значения чекбоксов

      const documentTopic = document.getElementById('theme').value;
      const incomingNumber = document.getElementById('incomingNumber').value;
      const outcomingNumber = document.getElementById('outcomingNumber').value;
      const deliveryType = document.getElementById('deliveryType').value;
      const executor = document.getElementById('executor').value;
      const subdivision = document.getElementById('subdivision').value;
      // Здесь получите значения полей ввода

      const correspondentDropdown = document.getElementById('correspondentDropdown').value;
      const incomingDate = document.getElementById('incomingDate').value;
      const outcomingDate = document.getElementById('outcomingDate').value;
      // Здесь получите значения других полей ввода типа date

      // Здесь создайте объект с данными для отправки в Firebase
      const data = {
        important: important,
        control: control,
        notcontrol: notcontrol,
        paper: paper,
        foruse: foruse,
        dir: dir,
        corres: corres,
        answer: answer,
        documentTopic: documentTopic,
        incomingNumber: incomingNumber,
        outcomingNumber: outcomingNumber,
        deliveryType: deliveryType,
        executor: executor,
        subdivision: subdivision,
        outcomingDate: outcomingDate,
        correspondentDropdown: correspondentDropdown,
        incomingDate: incomingDate
        // Добавьте другие поля данных
      };

      // Отправка данных в Firebase
      db.ref('/realsoft/incomingDocuments').push(data)
        .then(() => {
          alert('Данные успешно отправлены в Firebase!');
          clear();
        })
        .catch(error => {
          console.error('Ошибка отправки данных:', error);
        });
  

}

function clear(){
  var inputs = document.querySelectorAll('input');
  var inputsChecks = document.querySelectorAll('input[type=checkbox]');
for (var i = 0;  i < inputs.length; i++) {
  inputs[i].value = '';
};
for (var j = 0;  j < inputsChecks.length; j++) {
  inputsChecks[j].checked = false;
};

}

//   const dataRef = firebase.database().ref('/realsoft/incomingDocuments');

//   dataRef.on('value', snapshot => {

//   const container = document.getElementById('menu-block__list');

//   container.innerHTML = ''; // Очищаем контейнер перед добавлением новых данных

//   snapshot.forEach(childSnapshot => {
//     const info = childSnapshot.val();
//     const objectInfo = `
//       <div class="list-item">
//         <div class="list-item__icon">
//           <img src="img/red.png">
//         </div>
//         <div class="list-item__text">
//           <p>Рег. номер: ${info.incomingNumber}</p>
//           <p>${info.incomingDate}</p>
//           <p>${info.documentTopic}</p>
//           <p>${info.correspondentDropdown}</p>
//         </div> 
//       </div>
//     `;
//     container.insertAdjacentHTML('beforeend', objectInfo);
//   });
// });



        try {
          let app = firebase.app();
          let features = [
            'auth', 
            'database', 
            'firestore',
            'functions',
            'messaging', 
            'storage', 
            'analytics', 
            'remoteConfig',
            'performance',
          ].filter(feature => typeof app[feature] === 'function');
          loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
        } catch (e) {
          console.error(e);
          loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
        }
      });