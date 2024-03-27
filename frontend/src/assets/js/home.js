const font1 = document.createElement('link');
font1.rel = 'stylesheet';
font1.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap';
document.head.appendChild(font1);

const font2 = document.createElement('link');
font2.rel = 'stylesheet';
font2.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap';
document.head.appendChild(font2);

const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
const textareas = document.querySelectorAll('textarea');

inputs.forEach(input => {
input.addEventListener('focus', () => {
input.style.boxShadow = 'none';
input.style.outline = 'none';
input.style.resize = 'none';
});

input.addEventListener('hover', () => {
input.style.boxShadow = 'none';
input.style.outline = 'none';
input.style.resize = 'none';
});
});

buttons.forEach(button => {
button.addEventListener('hover', () => {
button.style.boxShadow = 'none';
button.style.outline = 'none';
button.style.resize = 'none';
});

button.addEventListener('active', () => {
button.style.boxShadow = 'none';
button.style.outline = 'none';
button.style.resize = 'none';
});

button.addEventListener('focus', () => {
button.style.boxShadow = 'none';
button.style.outline = 'none';
button.style.resize = 'none';
});
});

textareas.forEach(textarea => {
textarea.addEventListener('focus', () => {
textarea.style.boxShadow = 'none';
textarea.style.outline = 'none';
textarea.style.resize = 'none';
});

textarea.addEventListener('hover', () => {
textarea.style.boxShadow = 'none';
textarea.style.outline = 'none';
textarea.style.resize = 'none';
});
});

const aTags = document.querySelectorAll('a');
aTags.forEach(aTag => {
aTag.style.textDecoration = 'none';
aTag.style.color = '#000';
});

const root = document.documentElement;
root.style.setProperty('--body-background', '#F6F6F6');
root.style.setProperty('--text-color', '#000');
root.style.setProperty('--signature-color', '#33B4BA');
root.style.setProperty('--signature-color2', '#326DBA');

const dataThemeLight = document.querySelector('[data-theme="light"]');
if (dataThemeLight) {
root.style.setProperty('--body-background', '#F6F6F6');
root.style.setProperty('--text-color', '#000');
}

const dataThemeDark = document.querySelector('[data-theme="dark"]');
if (dataThemeDark) {
root.style.setProperty('--body-background', '#2D2B3F');
root.style.setProperty('--text-color', '#fff');
}

const homeDiv = document.querySelector('.homeDiv');
homeDiv.style.color = 'var(--text-color)';
homeDiv.style.height = '100vh';
homeDiv.style.backgroundImage = 'url("https://cdn.discordapp.com/attachments/747842649892978861/951407590703783978/20220310_155941_opacity.png")';
homeDiv.style.backgroundRepeat = 'auto';
homeDiv.style.backgroundSize = '50%';
homeDiv.style.backgroundPosition = 'center';

const homeHeader = document.querySelector('.homeDiv .homeHeader');
homeHeader.style.width = '100%';
homeHeader.style.height = '80px';
homeHeader.style.background = 'rgba(0,0,0,0.2)';
homeHeader.style.display = 'flex';
homeHeader.style.flexWrap = 'nowrap';
homeHeader.style.padding = '10px';

const homeHeaderDivs = document