/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.wiwaltill.qlab-qlugin.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('ACTION: Your key code goes here!');
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});

const goAction = new Action('com.wiwaltill.qlab-qlugin.go');

/**
 * GO ACTION
 */
goAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('GO: Your key code goes here!');
    alert("Hello! I am an alert box!!");
	const script = `
        tell application id "com.figure53.QLab.5" to tell front workspace
            start cue "4.1"
        end tell
        `;
    runAppleScript(script);
});

// Funktion, um AppleScript-Befehle auszuführen
function runAppleScript(script) {
    exec(`osascript -e '${script}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Fehler beim Ausführen des AppleScript: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`AppleScript-Fehler: ${stderr}`);
            return;
        }
        console.log(`AppleScript erfolgreich ausgeführt: ${stdout}`);
    });
}