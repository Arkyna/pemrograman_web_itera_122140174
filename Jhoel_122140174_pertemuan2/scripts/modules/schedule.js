const STORAGE_KEY = 'scheduleData';

const loadScheduleData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveScheduleData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleData));
};

const scheduleData = loadScheduleData();

const dayMap = {
    senin: 0,
    selasa: 1,
    rabu: 2,
    kamis: 3,
    jumat: 4,
    sabtu: 5,
    minggu: 6
  };
  
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const getTodayIndex = () => {
    const hari = new Date().getDay();
    return hari === 0 ? 6 : hari - 1;
  };
  
  export const addScheduleItem = (inputValue) => {
    const cleanedInput = inputValue.replace(/,/g, '|');
    const parts = cleanedInput.split('|').map(p => p.trim());  
    if (parts.length !== 4) {
      return { success: false, message: 'Format salah. Gunakan: Hari|Jam(HH:MM)|Matkul|Dosen' };
    }
  
    const [hari, jam, matkul, dosen] = parts;
    const lowerHari = hari.toLowerCase();
    const hariIndex = dayMap[lowerHari];
  
    if (hariIndex === undefined) {
      return { success: false, message: 'Hari tidak valid. Gunakan Senin - Minggu' };
    }
  
    const matchJam = jam.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/);
    if (!matchJam) {
      return { success: false, message: 'Format jam salah. Gunakan HH:MM (contoh: 08:30)' };
    }
  
    const [hour, minute] = jam.split(':').map(Number);
    const jamMenit = hour * 60 + minute;
  
    scheduleData.push({
      hari: capitalize(hari),
      hariIndex,
      jam,
      jamMenit,
      matkul,
      dosen
    });
  
    saveScheduleData();
    return { success: true };
  };
  

export const deleteScheduleItem = (index) => {
  if (index >= 0 && index < scheduleData.length) {
    scheduleData.splice(index, 1);
    saveScheduleData(); 
  }
};

export const clearAllSchedules = () => {
  scheduleData.length = 0;
  saveScheduleData(); 
};

export const renderSchedule = () => {
    const tbody = document.getElementById('scheduleBody');
    const thead = document.querySelector('.schedule-table thead');
  
    if (scheduleData.length === 0) {
      thead.style.display = 'none';
    } else {
      thead.style.display = 'table-header-group';
    }
  
    const sorted = [...scheduleData].sort((a, b) => {
      if (a.hariIndex !== b.hariIndex) return a.hariIndex - b.hariIndex;
      return a.jamMenit - b.jamMenit;
    });
  
    const today = getTodayIndex();

    tbody.innerHTML = sorted.map((item, index) => {
      const isToday = item.hariIndex === today;
      return `
        <tr class="${isToday ? 'highlight-today' : ''}">
          <td>${item.hari}</td>
          <td>${item.jam}</td>
          <td>${item.matkul}</td>
          <td>${item.dosen}</td>
          <td><button data-index="${index}" class="delete-schedule-btn">-</button></td>
        </tr>
      `;
    }).join('');
    
  
  
    document.querySelectorAll('.delete-schedule-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        deleteScheduleItem(index);
        renderSchedule();
      });
    });
  };
  
  