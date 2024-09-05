const container = document.querySelector('.up-clock');
const clockInput = document.querySelector('.clock');
// const dateInput = document.querySelector('.date');

function clockSetup() {
    const uareg = new Date();

    const hours = uareg.getHours();
    const min = uareg.getMinutes();
    const sec = uareg.getSeconds();
    // const datenow = uareg.toLocaleDateString();

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = min < 10 ? '0' + min : min;
    const formattedSeconds = sec < 10 ? '0' + sec : sec;

    const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    const currentTitle = `${formattedHours}:${formattedMinutes}`;

    // dateInput.innerHTML = datenow;
    clockInput.innerHTML = currentTime;
    container.appendChild(clockInput);
    // container.appendChild(dateInput);
    document.title = currentTitle
}
setInterval(clockSetup, 800);
clockSetup()













































function changeThemes() {
    const btnThemes = document.querySelector('.theme-change');

    btnThemes.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');

        if (isDark) {
            localStorage.setItem('darkMode', 'dark');
        } else {
            localStorage.setItem('darkMode', 'light');
        }
    });

    if (localStorage.getItem('darkMode') === 'dark') {
        btnThemes.classList.add("btn-change-themes--active");
        document.body.classList.add("dark");
    } else {
        btnThemes.classList.remove("btn-change-themes--active");
        document.body.classList.remove("dark");
    }
}


changeThemes();

