export const renderTaskList = (tasks, container, onEdit, onDelete) => {
    container.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `
        <span>${task}</span>
        <div class="task-actions">
          <button class="edit-btn" data-index="${index}">✏️</button>
          <button class="delete-btn" data-index="${index}">🗑️</button>
        </div>
      `;
  
      // Pasang listener
      li.querySelector('.edit-btn').addEventListener('click', () => onEdit(index));
      li.querySelector('.delete-btn').addEventListener('click', () => onDelete(index));
  
      container.appendChild(li);
    });
  };
  