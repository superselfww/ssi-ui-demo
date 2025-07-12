import ICONS from "../../assets/Icons";

const RenderIconUsingId = (icon) => {
    switch (icon) {
        case 1:
            return ICONS.emotionalrecognition;
        case 2:
            return ICONS.meditation;
        case 3:
            return ICONS.exercises;
        case 4:
            return ICONS["know-my-strength"];
        case 5:
            return ICONS["know-my-super-power"];
        case 6:
            return ICONS["assess-my-mental-health"];
        case 7:
            return ICONS.game;
        case 8:
            return ICONS.game;
        case 9:
            return ICONS.game;
        case 10:
            return ICONS["skill-acquisition-report"];
        case 11:
            return ICONS["emotional-development-report"];
        case 12:
            return ICONS["my-progress"];
        case 13:
            return ICONS["sel-sessions"];
        case 14:
            return ICONS.report;
        case 15:
            return ICONS.classes;
        case 16:
            return ICONS.analytics;
        case 17:
            return ICONS.chat;
        case 18:
            return ICONS.chatbot;
        case 19:
            return ICONS.profile;
        case 20:
            return ICONS.subscription;
        default:
            return ICONS.exercises;
    }
}

export default RenderIconUsingId;
