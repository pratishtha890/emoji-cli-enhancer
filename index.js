import chalk from 'chalk';

const emojis = {
    // Success and Positive Feedback
    success: '✅',
    party: '🎉',
    rocket: '🚀',
    star: '🌟',
    sparkles: '✨',
    muscle: '💪',

    // Error and Warnings
    error: '❌',
    warning: '⚠️',
    fire: '🔥',
    stop: '🛑',

    // Information and Updates
    info: 'ℹ️',
    loudspeaker: '📢',
    memo: '📝',
    bar_chart: '📊',
    magnifying_glass: '🔍',

    // Status Indicators
    hourglass: '⏳',
    check_mark: '✔️',
    arrows_counterclockwise: '🔄',
    clock: '🕒',

    // Miscellaneous
    hammer_and_wrench: '🛠️',
    package: '📦',
    earth: '🌍',
    dart: '🎯',
    calendar: '📅',

    // Smiley Faces
    grinning: '😀',
    excited: '😃',
    joyful: '😄',
    beaming: '😁',
    happy: '😊',
    innocent: '😇',
    smile: '🙂',
    relieved: '😌',
    playful: '😉',
    love: '😍',
    cool: '😎',
    hug: '🤗',
    party_face: '🥳',
    hearts: '🥰',
    star_struck: '🤩'
};

function emojiLog(type, message) {
    const emoji = emojis[type] || '';
    console.log(`${emoji} ${chalk.blue(message)}`);
}

const emojiCLI = {
    success: (message) => emojiLog('success', message),
    error: (message) => emojiLog('error', message),
    warning: (message) => emojiLog('warning', message),
    info: (message) => emojiLog('info', message),
    party: (message) => emojiLog('party', message),
    rocket: (message) => emojiLog('rocket', message),
    fire: (message) => emojiLog('fire', message),
    loudspeaker: (message) => emojiLog('loudspeaker', message),
    memo: (message) => emojiLog('memo', message),
    bar_chart: (message) => emojiLog('bar_chart', message),
    magnifying_glass: (message) => emojiLog('magnifying_glass', message),
    hourglass: (message) => emojiLog('hourglass', message),
    check_mark: (message) => emojiLog('check_mark', message),
    arrows_counterclockwise: (message) => emojiLog('arrows_counterclockwise', message),
    clock: (message) => emojiLog('clock', message),
    hammer_and_wrench: (message) => emojiLog('hammer_and_wrench', message),
    package: (message) => emojiLog('package', message),
    earth: (message) => emojiLog('earth', message),
    dart: (message) => emojiLog('dart', message),
    calendar: (message) => emojiLog('calendar', message),
    happy: (message) => emojiLog('happy', message),
    cool: (message) => emojiLog('cool', message),
    love: (message) => emojiLog('love', message),
    hug: (message) => emojiLog('hug', message),
    party_face: (message) => emojiLog('party_face', message),
    smile: (message) => emojiLog('smile', message),
    star_struck: (message) => emojiLog('star_struck', message),
    custom: (emoji, message) => console.log(`${emoji} ${chalk.green(message)}`)
};
export { emojiCLI };
export default emojiCLI;