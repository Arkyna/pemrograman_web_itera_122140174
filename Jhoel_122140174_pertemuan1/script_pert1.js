document.addEventListener('DOMContentLoaded', function() {
    /* Tugas 1 */
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let autoSaveEnabled = true;
    
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const autosaveCheckbox = document.getElementById('autosave-checkbox');
    const saveBtn = document.getElementById('save-btn');
    
    autosaveCheckbox.addEventListener('change', function() {
      autoSaveEnabled = this.checked;
      if (autoSaveEnabled) {
        saveTodos();
      }
    });
    
    function updateTodos() {
      if (autoSaveEnabled) {
        saveTodos();
      }
      renderTodos();
    }
    
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
          const li = document.createElement('li');
          li.className = 'todo-item' + (todo.completed ? ' done' : '');
          
          const span = document.createElement('span');
          span.textContent = todo.text;
          
          const doneBtn = document.createElement('button');
          doneBtn.textContent = todo.completed ? 'Undo' : 'Done';
          doneBtn.addEventListener('click', function() {
            todos[index].completed = !todos[index].completed;
            updateTodos();
          });
          
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Hapus';
          deleteBtn.addEventListener('click', function() {
            todos.splice(index, 1);
            updateTodos();
          });
          
          const btnContainer = document.createElement('div');
          btnContainer.className = 'todo-buttons';
          btnContainer.appendChild(doneBtn);
          btnContainer.appendChild(deleteBtn);
          
          li.appendChild(span);
          li.appendChild(btnContainer);
          todoList.appendChild(li);
        });
      }
      
    
    function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    addBtn.addEventListener('click', function() {
      const text = todoInput.value.trim();
      if (text !== '') {
        todos.push({ text: text, completed: false });
        updateTodos();
        todoInput.value = '';
      }
    });
    
    saveBtn.addEventListener('click', function() {
      saveTodos();
      renderTodos();
    });
    
    renderTodos();
    
    /* Tugas 2 */
    function Kalkulator(angka1, angka2, operasi) {
      let hasil = 0;
      switch (operasi) {
        case "tambah":
          hasil = angka1 + angka2;
          break;
        case "kurang":
          hasil = angka1 - angka2;
          break;
        case "kali":
          hasil = angka1 * angka2;
          break;
        case "bagi":
          if (angka2 === 0) return "Error: Pembagian dengan nol tidak diperbolehkan";
          hasil = angka1 / angka2;
          break;
        case "pangkat":
          hasil = Math.pow(angka1, angka2);
          break;
        case "modulus":
          if (angka2 === 0) return "Error: Modulus dengan nol tidak diperbolehkan";
          hasil = angka1 % angka2;
          break;
        case "akar":
          if (angka1 < 0) return "Error: Akar kuadrat dari angka negatif tidak valid";
          hasil = Math.sqrt(angka1);
          break;
        default:
          return "Operasi tidak valid";
      }
      return hasil;
    }
    
    const hasilDisplay = document.getElementById('hasil-kalkulator');
    
    function prosesOperasi(operasi, gunakanDuaAngka = true) {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);
      
      if (isNaN(angka1) || (gunakanDuaAngka && isNaN(angka2))) {
        hasilDisplay.innerHTML = `<p class="error">Masukkan angka yang valid!</p>`;
        return;
      }
      
      const hasil = Kalkulator(angka1, angka2, operasi);
      let displayText = '';
      
      switch(operasi) {
        case "tambah": displayText = `${angka1} + ${angka2} = ${hasil}`; break;
        case "kurang": displayText = `${angka1} - ${angka2} = ${hasil}`; break;
        case "kali": displayText = `${angka1} × ${angka2} = ${hasil}`; break;
        case "bagi": displayText = `${angka1} ÷ ${angka2} = ${hasil}`; break;
        case "pangkat": displayText = `${angka1} ^ ${angka2} = ${hasil}`; break;
        case "modulus": displayText = `${angka1} % ${angka2} = ${hasil}`; break;
        case "akar": displayText = `√${angka1} = ${hasil}`; break;
        default: displayText = "Operasi tidak valid";
      }
      hasilDisplay.innerHTML = `<p>${displayText}</p>`;
    }
    
    document.getElementById("btn-tambah").addEventListener("click", function() {
      prosesOperasi("tambah");
    });
    document.getElementById("btn-kurang").addEventListener("click", function() {
      prosesOperasi("kurang");
    });
    document.getElementById("btn-kali").addEventListener("click", function() {
      prosesOperasi("kali");
    });
    document.getElementById("btn-bagi").addEventListener("click", function() {
      prosesOperasi("bagi");
    });
    document.getElementById("btn-pangkat").addEventListener("click", function() {
      prosesOperasi("pangkat");
    });
    document.getElementById("btn-modulus").addEventListener("click", function() {
      prosesOperasi("modulus");
    });
    document.getElementById("btn-akar").addEventListener("click", function() {
      prosesOperasi("akar", false);
    });
    
    /* Tugas 3 */
    document.getElementById("my-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      let errorMessages = [];
      
      if (nama.length <= 3) {
        errorMessages.push("Nama harus lebih dari 3 karakter.");
      }
      
      // Validasi email sederhana
      const uniques = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!uniques.test(email)) {
        errorMessages.push("Email tidak valid.");
      }
      
      if (password.length < 8) {
        errorMessages.push("Password harus minimal 8 karakter.");
      }
      
      const errorDiv = document.getElementById("form-error");
      if (errorMessages.length > 0) {
        errorDiv.innerHTML = errorMessages.map(msg => `<p class="error">${msg}</p>`).join("");
      } else {
        errorDiv.innerHTML = `<p class="success">Data Valid!</p>`;
      }
    });
    document.addEventListener('DOMContentLoaded', function() {
    /* Tugas 1 */
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let autoSaveEnabled = true;
    
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const autosaveCheckbox = document.getElementById('autosave-checkbox');
    const saveBtn = document.getElementById('save-btn');
    
    autosaveCheckbox.addEventListener('change', function() {
      autoSaveEnabled = this.checked;
      if (autoSaveEnabled) {
        saveTodos();
      }
    });
    
    function updateTodos() {
      if (autoSaveEnabled) {
        saveTodos();
      }
      renderTodos();
    }
    
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
          const li = document.createElement('li');
          li.className = 'todo-item' + (todo.completed ? ' done' : '');
          
          const span = document.createElement('span');
          span.textContent = todo.text;
          
          const doneBtn = document.createElement('button');
          doneBtn.textContent = todo.completed ? 'Undo' : 'Done';
          doneBtn.addEventListener('click', function() {
            todos[index].completed = !todos[index].completed;
            updateTodos();
          });
          
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Hapus';
          deleteBtn.addEventListener('click', function() {
            todos.splice(index, 1);
            updateTodos();
          });
          
          const btnContainer = document.createElement('div');
          btnContainer.className = 'todo-buttons';
          btnContainer.appendChild(doneBtn);
          btnContainer.appendChild(deleteBtn);
          
          li.appendChild(span);
          li.appendChild(btnContainer);
          todoList.appendChild(li);
        });
      }
    
    function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    addBtn.addEventListener('click', function() {
      const text = todoInput.value.trim();
      if (text !== '') {
        todos.push({ text: text, completed: false });
        updateTodos();
        todoInput.value = '';
      }
    });
    
    saveBtn.addEventListener('click', function() {
      saveTodos();
      renderTodos();
    });
    
    renderTodos();
    
    /* Tugas 2 */
    function Kalkulator(angka1, angka2, operasi) {
      let hasil = 0;
      switch (operasi) {
        case "tambah":
          hasil = angka1 + angka2;
          break;
        case "kurang":
          hasil = angka1 - angka2;
          break;
        case "kali":
          hasil = angka1 * angka2;
          break;
        case "bagi":
          if (angka2 === 0) return "Error: Pembagian dengan nol tidak diperbolehkan";
          hasil = angka1 / angka2;
          break;
        case "pangkat":
          hasil = Math.pow(angka1, angka2);
          break;
        case "modulus":
          if (angka2 === 0) return "Error: Modulus dengan nol tidak diperbolehkan";
          hasil = angka1 % angka2;
          break;
        case "akar":
          if (angka1 < 0) return "Error: Akar kuadrat dari angka negatif tidak valid";
          hasil = Math.sqrt(angka1);
          break;
        default:
          return "Operasi tidak valid";
      }
      return hasil;
    }
    
    const hasilDisplay = document.getElementById('hasil-kalkulator');
    
    function prosesOperasi(operasi, gunakanDuaAngka = true) {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);
      
      if (isNaN(angka1) || (gunakanDuaAngka && isNaN(angka2))) {
        hasilDisplay.innerHTML = `<p class="error">Masukkan angka yang valid!</p>`;
        return;
      }
      
      const hasil = Kalkulator(angka1, angka2, operasi);
      let displayText = '';
      
      switch(operasi) {
        case "tambah": displayText = `${angka1} + ${angka2} = ${hasil}`; break;
        case "kurang": displayText = `${angka1} - ${angka2} = ${hasil}`; break;
        case "kali": displayText = `${angka1} × ${angka2} = ${hasil}`; break;
        case "bagi": displayText = `${angka1} ÷ ${angka2} = ${hasil}`; break;
        case "pangkat": displayText = `${angka1} ^ ${angka2} = ${hasil}`; break;
        case "modulus": displayText = `${angka1} % ${angka2} = ${hasil}`; break;
        case "akar": displayText = `√${angka1} = ${hasil}`; break;
        default: displayText = "Operasi tidak valid";
      }
      hasilDisplay.innerHTML = `<p>${displayText}</p>`;
    }
    
    document.getElementById("btn-tambah").addEventListener("click", function() {
      prosesOperasi("tambah");
    });
    document.getElementById("btn-kurang").addEventListener("click", function() {
      prosesOperasi("kurang");
    });
    document.getElementById("btn-kali").addEventListener("click", function() {
      prosesOperasi("kali");
    });
    document.getElementById("btn-bagi").addEventListener("click", function() {
      prosesOperasi("bagi");
    });
    document.getElementById("btn-pangkat").addEventListener("click", function() {
      prosesOperasi("pangkat");
    });
    document.getElementById("btn-modulus").addEventListener("click", function() {
      prosesOperasi("modulus");
    });
    document.getElementById("btn-akar").addEventListener("click", function() {
      prosesOperasi("akar", false);
    });
    
    /* Tugas 3 */
    document.getElementById("my-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      let errorMessages = [];
      
      if (nama.length <= 3) {
        errorMessages.push("Nama harus lebih dari 3 karakter.");
      }
      
      const uniques = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!uniques.test(email)) {
        errorMessages.push("Email tidak valid.");
      }
      
      if (password.length < 8) {
        errorMessages.push("Password harus minimal 8 karakter.");
      }

    document.getElementById("toggle-password").addEventListener("click", function() {
        const passwordInput = document.getElementById("password");
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
      });
      
      const errorDiv = document.getElementById("form-error");
      if (errorMessages.length > 0) {
        errorDiv.innerHTML = errorMessages.map(msg => `<p class="error">${msg}</p>`).join("");
      } else {
        errorDiv.innerHTML = `<p class="success">Data Valid!</p>`;
      }
    });
  });
  document.getElementById("toggle-password").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });
  
  });
  