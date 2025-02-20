const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
      withCredentials: true,
    });

    if (res.data.status === 'success') {
      setTimeout(() => {
        location.assign('/');
      }, 1500);
    } else {
      alert(res.data.message);
    }

    // console.log(res);
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
  });
});
