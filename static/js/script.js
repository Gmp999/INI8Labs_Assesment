const API_URL = 'http://127.0.0.1:8000/api/registrations/';

const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const cancelEditBtn = document.getElementById('cancelEdit');
let editingId = null;

function fetchUsers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector('#userTable tbody');
      tbody.innerHTML = '';
      data.forEach(user => {
        tbody.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.date_of_birth}</td>
            <td>${user.phone || '-'}</td>
            <td>${user.age || '-'}</td>
            <td>
              <button class="edit-btn" onclick='editUser(${JSON.stringify(user)})'>Edit</button>
              <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const payload = {
    name: nameInput.value,
    email: emailInput.value,
    date_of_birth: dobInput.value,
    phone: phoneInput.value,
    age: ageInput.value ? parseInt(ageInput.value) : null
  };

  const method = editingId ? 'PUT' : 'POST';
  const url = editingId ? `${API_URL}${editingId}/` : API_URL;

  fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(res => {
      if (!res.ok) throw new Error('Validation error');
      return res.json();
    })
    .then(() => {
      fetchUsers();
      form.reset();
      editingId = null;
      cancelEditBtn.style.display = 'none';
    })
    .catch(err => alert(err.message));
});

function editUser(user) {
  nameInput.value = user.name;
  emailInput.value = user.email;
  dobInput.value = user.date_of_birth;
  phoneInput.value = user.phone || '';
  ageInput.value = user.age || '';
  editingId = user.id;
  cancelEditBtn.style.display = 'inline-block';
}

cancelEditBtn.addEventListener('click', () => {
  editingId = null;
  form.reset();
  cancelEditBtn.style.display = 'none';
});

function deleteUser(id) {
  if (confirm('Are you sure?')) {
    fetch(`${API_URL}${id}/`, { method: 'DELETE' })
      .then(() => fetchUsers());
  }
}

// Initial fetch
fetchUsers();
