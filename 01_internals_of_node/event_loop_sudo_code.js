// node event_loop_sudo_code.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// New timer, tasks and operations are recorded from myFile running
myFile.runContents(); // lets consider this file is called "myFile"

// Entire while loop executed in one 'tick'
while(shouldContinue()) {
	// Step 1. Node looks at pending timers and sees if any functions are ready to be called (setTimeout, setIntervals).
	// Step 2. Node looks at pending os tasks and pending operations and calls relevent callbacks
	// Step 3. Pause execution. Continue when ... 
	// - a new pendingOStask is done	
	// - a new pendingOperation is done 
	// - a timer is about to complete
	// Step 4. Look at pendingTimers. Call any setImmediate.
	// Step 5. Hanlde any 'close' event. for example: readStream.on('close', () => { //Cleanup code })
}

function shouldContinue() {
	// Check 1. Any pending setTimeout, setInterval for setImmediate?
	// Check 2. Any pending operating system task (like a server listening ot a port)
	// Check 3. Any pending long running operation (like fs module)
	return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

// exit from terminal
