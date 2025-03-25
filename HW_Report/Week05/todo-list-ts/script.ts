class Todo {
  name: string;
  dueDate: string;
  content: string;
  createdAt: string;

  constructor(name: string, dueDate: string, content: string) {
    this.name = name;
    this.dueDate = dueDate;
    this.content = content;
    this.createdAt = new Date().toLocaleString(undefined, { timeZoneName: 'short' });
  }
}

class TodoApp {
  private storageKey: string = '';
  private todos: Todo[] = [];

  constructor() {
    this.setupLogin();
  }

  private hashInput(username: string, password: string): string {
    const raw = username + ':' + password;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = (hash << 5) - hash + raw.charCodeAt(i);
      hash |= 0;
    }
    return 'user_' + Math.abs(hash).toString(16);
  }

  private loadTodos(): void {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      this.todos = [];
      return;
    }

    try {
      this.todos = JSON.parse(raw);
    } catch {
      this.todos = [];
    }
  }

  private saveTodos(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  private renderTodos(): void {
    const list = document.getElementById('todo-list')!;
    list.innerHTML = '';
    this.todos.forEach(todo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${todo.name}</strong> (Due: ${todo.dueDate})<br>
        ${todo.content}<br>
        <small>Created at: ${todo.createdAt}</small>
      `;
      list.appendChild(li);
    });
  }

  private isValidDate(dateStr: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
  }

  private handleAddTodo(): void {
    const form = document.getElementById('todo-form') as HTMLFormElement;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('todo-name') as HTMLInputElement;
      const dueInput = document.getElementById('todo-due') as HTMLInputElement;
      const contentInput = document.getElementById('todo-content') as HTMLTextAreaElement;

      const name = nameInput.value.trim();
      const dueDate = dueInput.value;
      const content = contentInput.value.trim();

      if (!name || name.length > 50) return alert('Invalid name (max 50 chars)');
      if (!content || content.length > 200) return alert('Invalid content (max 200 chars)');
      if (!this.isValidDate(dueDate)) return alert('Invalid due date format (YYYY-MM-DD)');

      const newTodo = new Todo(name, dueDate, content);
      this.todos.push(newTodo);
      this.saveTodos();
      this.renderTodos();
      form.reset();
    });
  }

  private setupClock(): void {
    const clock = document.getElementById('clock')!;
    setInterval(() => {
      clock.textContent = `Current Time: ${new Date().toLocaleString(undefined, { timeZoneName: 'short' })}`;
    }, 1000);
  }

  private showAppUI(): void {
    document.getElementById('login-screen')!.style.display = 'none';
    document.getElementById('app-screen')!.style.display = 'block';

    this.loadTodos();
    this.renderTodos();
    this.setupClock();
    this.handleAddTodo();

    const logoutBtn = document.getElementById('logout-button')!;
    logoutBtn.addEventListener('click', () => this.logout());
  }

  private logout(): void {
    this.storageKey = '';
    this.todos = [];
    document.getElementById('app-screen')!.style.display = 'none';
    document.getElementById('login-screen')!.style.display = 'block';
  }

  private setupLogin(): void {
    const loginButton = document.getElementById('login-button')!;
    loginButton.addEventListener('click', () => {
      const username = (document.getElementById('username') as HTMLInputElement).value.trim();
      const password = (document.getElementById('password') as HTMLInputElement).value.trim();
      
      (document.getElementById('username') as HTMLInputElement).value = '';
      (document.getElementById('password') as HTMLInputElement).value = '';

      if (!username || !password) return alert('Please enter both username and password');

      this.storageKey = this.hashInput(username, password);
      this.showAppUI();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new TodoApp();
});
