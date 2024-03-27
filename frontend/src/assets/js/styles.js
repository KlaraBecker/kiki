input.addEventListener("focus", () => {
    input.style.boxShadow = "none !important";
    input.style.outline = "none";
    input.style.resize = "none !important";
});

input.addEventListener("hover", () => {
    input.style.boxShadow = "none !important";
    input.style.outline = "none";
    input.style.resize = "none !important";
});

button.addEventListener("hover", () => {
    button.style.boxShadow = "none !important";
    button.style.outline = "none";
});

button.addEventListener("active", () => {
    button.style.boxShadow = "none !important";
    button.style.outline = "none";
});

button.addEventListener("focus", () => {
    button.style.boxShadow = "none !important";
    button.style.outline = "none";
});

textarea.addEventListener("focus", () => {
    textarea.style.boxShadow = "none !important";
    textarea.style.outline = "none";
    textarea.style.resize = "none !important";
});

textarea.addEventListener("hover", () => {
    textarea.style.boxShadow = "none !important";
    textarea.style.outline = "none";
    textarea.style.resize = "none !important";
});

textarea.style.boxShadow = "none !important";
textarea.style.outline = "none";
textarea.style.resize = "none !important";

a.style.textDecoration = "none";
a.style.color = "#000";

document.documentElement.style.setProperty("--body-background", "#F6F6F6");
document.documentElement.style.setProperty("--text-color", "#000");
document.documentElement.style.setProperty("--right-side-background", "#F9F9F9");
document.documentElement.style.setProperty("--bubble-opponent", "#F2F2F2");
document.documentElement.style.setProperty("--bubble-you", "hsla(183, 57%, 46%, 1)");
document.documentElement.style.setProperty("--name-opponent", "hsla(183, 57%, 46%, 1)");
document.documentElement.style.setProperty("--name-you", "#000");
document.documentElement.style.setProperty("--overflow-background", "#000");
document.documentElement.style.setProperty("--opposite-background", "rgba(0, 0, 0, 0.15)");
document.documentElement.style.setProperty("--opposite-text", "#fff");
document.documentElement.style.setProperty("--folder-background", "rgba(0, 0, 0, 0.1)");
document.documentElement.style.setProperty("--bg-section-theme", "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(\"https://cdn.discordapp.com/attachments/747842649892978861/951407181134196746/20220310_155835_opacity.png\")");

const dataThemeLight = document.querySelector("[data-theme='light']");

dataThemeLight.style.setProperty("--body-background", "#F6F6F6");
dataThemeLight.style.setProperty("--text-color", "#000");
dataThemeLight.style.setProperty("--right-side-background", "#F9F9F9");
dataThemeLight.style.setProperty("--bubble-opponent", "#F2F2F2");
dataThemeLight.style.setProperty("--bubble-you", "hsla(183, 57%, 46%, 1)");
dataThemeLight.style.setProperty("--name-opponent", "hsla(183, 57%, 46%, 1)");
dataThemeLight.style.setProperty("--name-you", "#000");
dataThemeLight.style.setProperty("--overflow-background", "#000");
dataThemeLight.style.setProperty("--opposite-background", "rgba(0, 0, 0, 0.
