export function startGreetingUpdater(name = 'User') {
  const el = document.getElementById('greeting');
  if (!el) return;

  const updateGreeting = () => {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 5 && hour < 11) {
      greeting = `Selamat Pagi, ${name} 🌤️`;
    } else if (hour >= 11 && hour < 15) {
      greeting = `Selamat Siang, ${name} ☀️`;
    } else if (hour >= 15 && hour < 18) {
      greeting = `Selamat Sore, ${name} 🌇`;
    } else if (hour >= 18 && hour < 22) {
      greeting = `Selamat Malam, ${name} ✨`;
    } else {
      greeting = `Waktunya istirahat, ${name} 🌙`;
    }

    el.textContent = greeting;
  };

  updateGreeting();
  setInterval(updateGreeting, 60 * 1000);
}
export function startDateTimeUpdater() {
  function updateDateTime() {
    const datetimeElement = document.querySelector('.datetime');
    if (!datetimeElement) return;

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    datetimeElement.textContent = `${hours}:${minutes}:${seconds} | ${day}/${month}/${year}`;
  }

  updateDateTime(); 
  setInterval(updateDateTime, 1000);
}
