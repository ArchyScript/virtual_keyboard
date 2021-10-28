// 

// Arrays of some css properties
// Keyboard Colors
const keyboardRootColors = [
  { keyContainerBgColor: "#111111", inputKeyBgColor: "#666666",  specialKeyBgColor: "#444444", allTextColor: "light", activeKeyBackgroundColor: "aqua" },                                                                                    //
  { keyContainerBgColor: "#430000", inputKeyBgColor: "#870000",  specialKeyBgColor: "#600000", allTextColor: "light", activeKeyBackgroundColor: "lightgreen" },                                                                                    //
  { keyContainerBgColor: "#002d00", inputKeyBgColor: "#00bc00",  specialKeyBgColor: "#006500", allTextColor: "light", activeKeyBackgroundColor: "blue" },                                                                                    //
  { keyContainerBgColor: "#0000bc", inputKeyBgColor: "#000065",  specialKeyBgColor: "#00002d", allTextColor: "light", activeKeyBackgroundColor: "green" },                                                                                    //
  { keyContainerBgColor: "#372887", inputKeyBgColor: "#8242c3",  specialKeyBgColor: "#473e9f", allTextColor: "light", activeKeyBackgroundColor: "aqua" },
  { keyContainerBgColor: "#c178fb", inputKeyBgColor: "#d9aeff",  specialKeyBgColor: "#e4aeff", allTextColor: "dark", activeKeyBackgroundColor: "aqua" },                                                                                    //
  { keyContainerBgColor: "#a0ffe8", inputKeyBgColor: "#b6ffd4",  specialKeyBgColor: "#dfffd4", allTextColor: "dark", activeKeyBackgroundColor: "blue" },                                                                                    //
  { keyContainerBgColor: "Azure", inputKeyBgColor: "#f5f5dc",  specialKeyBgColor: "#daa520", allTextColor: "dark", activeKeyBackgroundColor: "aqua" },                                                                                    //
  { keyContainerBgColor: "Gold", inputKeyBgColor: "#f5f5dc",  specialKeyBgColor: "#daa520", allTextColor: "dark", activeKeyBackgroundColor: "green" },      
  { keyContainerBgColor: "LightGreen", inputKeyBgColor: "GreenYellow",  specialKeyBgColor: "LawnGreen", allTextColor: "dark", activeKeyBackgroundColor: "aqua" },                                                                                    //
  { keyContainerBgColor: "HoneyDew", inputKeyBgColor: "Lavender",  specialKeyBgColor: "LavenderBlush", allTextColor: "dark", activeKeyBackgroundColor: "lightgreen" },                                                                                    //
  { keyContainerBgColor: "Khaki", inputKeyBgColor: "LemonChiffon",  specialKeyBgColor: "Lavender", allTextColor: "dark", activeKeyBackgroundColor: "green" },                                                                                    //
  { keyContainerBgColor: "Turquoise", inputKeyBgColor: "Bisque",  specialKeyBgColor: "LightGoldenRodYellow", allTextColor: "dark", activeKeyBackgroundColor: "green" },      
  { keyContainerBgColor: "Fuchsia", inputKeyBgColor: "Pink",  specialKeyBgColor: "LightPink", allTextColor: "dark", activeKeyBackgroundColor: "aqua" },                                                                                    //
  { keyContainerBgColor: "Aqua", inputKeyBgColor: "DarkCyan",  specialKeyBgColor: "DarkTurquoise", allTextColor: "dark", activeKeyBackgroundColor: "lightgreen" },                                                                                    //
  { keyContainerBgColor: "LightBlue", inputKeyBgColor: "LightCyan",  specialKeyBgColor: "LightSkyBlue", allTextColor: "dark", activeKeyBackgroundColor: "green" }                                                                                         //
]
// Keypad Sounds
const keypadSounds = [
  { soundType: "phone_beep", soundAudioName: "sound_1" },
  { soundType: "game_sound", soundAudioName: "sound_2" },
  { soundType: "click_1", soundAudioName: "sound_3" },
  { soundType: "click_2", soundAudioName: "sound_4" },
  { soundType: "click_3", soundAudioName: "sound_5" },
  { soundType: "click_4", soundAudioName: "sound_6" },
  { soundType: "click_5", soundAudioName: "sound_7" },
  { soundType: "click_6", soundAudioName: "sound_8" },
  { soundType: "click_7", soundAudioName: "sound_9" },
  { soundType: "click_8", soundAudioName: "sound_10" },
  { soundType: "click_9", soundAudioName: "sound_11" },
  { soundType: "gear_screw", soundAudioName: "sound_12" },
  { soundType: "click_10", soundAudioName: "sound_13" }
]
// Keyboard Height
const availableKeyboardHeights = [
  { selectedHeight: "very_small", keypadTopSpacing: "4px", keypadBottomSpacing: "1px" },
  { selectedHeight: "small", keypadTopSpacing: "6px", keypadBottomSpacing: "2px" },
  { selectedHeight: "medium", keypadTopSpacing: "8px", keypadBottomSpacing: "3px" },
  { selectedHeight: "high", keypadTopSpacing: "10px", keypadBottomSpacing: "4px" },
  { selectedHeight: "very_high", keypadTopSpacing: "12px", keypadBottomSpacing: "6px" },
]

// Create re-useable functions
function displayInnerHTML ( eventId, eventValue ) {
  document.getElementById(eventId).innerHTML = eventValue;
}
function displayContent ( eventId, eventValue ) {
  document.getElementById(eventId).style.display = eventValue;
}
function addOpacity ( eventId, eventValue ) {
  document.getElementById(eventId).style.opacity = eventValue;
}

// DOM Elements 
// Element by IDs
const settingsBox = document.getElementById("settings_box")
const closeSettingsBtn = document.getElementById("close_settings_btn")
const keyboardBackground = document.getElementById("keyboard_background")
const saveSettingsBtn = document.getElementById("save_settings_btn")
const outputContainer = document.getElementById("output_container")
const currentlyTypedText = document.getElementById("currently_typed_text")
const openSettingsBtn = document.getElementById("open_settings_btn")
const keypadSound = document.getElementById("sound_2")
const checkSound = document.getElementById("check_sound")
// Keyboard Keys Node list 
const allAlphabetKeys = document.querySelectorAll(".alphabet_key")
const allNumberKeys = document.querySelectorAll(".number_key")
const allSpecialCharacters = document.querySelectorAll(".special_char")
const allEmojiButtons = document.querySelectorAll(".emoji_btn")
const allSpecialKeys = document.querySelectorAll(".special_key")
// Settings Box Node list
const allAvailableBackgroundColors = document.querySelectorAll(".available_background_color")
// CSS Root Property
const rootProperties = document.documentElement;
// Create boolen values to perform some task
// Shift Key // (Off the caplocks by default)
var onCaplocks = false
// Open Emoji and Special Character Button 
var checkEmojiBtn = true
var checkSpecialCharacterBtn = true


// Functions 
// A keyboard input and output container display function
// Create a function to display text in the output container
function displayTypedText () {
  // Create a function to loop through all input keys on the keyboard and perform some task
  function keyboardInputKeys (allKeyboardInputKeys) {
    // Loop through all input keys on the keyboard
    allKeyboardInputKeys.forEach(eachKeyboardInputKey => {
      /*  This event is always triggered when it's parent function
      is set to a particular time interval... Remove all active class at first.  */
      eachKeyboardInputKey.classList.remove('active')
      eachKeyboardInputKey.onclick = () => {  
        // Above sets a click event to each input key
        // Below adds an active classList to the input key clicked
        eachKeyboardInputKey.classList.add('active')
        /*  Checks if the user wants a keypad sound onclick on any input key and
        and calls the keypadSoundEffect() function if and only if YES  */
        if (checkSound.checked) keypadSoundEffect()

        // Displays the text in it's respective container 
        outputContainer.innerHTML += eachKeyboardInputKey.innerText
        currentlyTypedText.innerHTML += eachKeyboardInputKey.innerText
      }
    })
   }
    // Call the function and pass in respective values for its parameter
    keyboardInputKeys(allNumberKeys)
    keyboardInputKeys(allAlphabetKeys)
    keyboardInputKeys(allSpecialCharacters)
    keyboardInputKeys(allEmojiButtons)
}
displayTypedText()
setInterval(displayTypedText, 1)
/*  The above line sets time interval to the smallest time possible for someone to type
so that all active class in each input key is removed before another click  
1 milli seconds isn't bad right?  */


// Special key function
// Create a function to make each special key work
function specialKeyboardKeys () {
  // Loop through all special keys and perform some task
  allSpecialKeys.forEach(eachSpecialKey => {
    eachSpecialKey.onclick = () => {
      // The above line sets an onclick event to all special key
      /* The line below assigns the ID of each special key and assigns it to a keyId variable
      to avoid repating eachSpecialKey.id  */
       let keyId = eachSpecialKey.id
      
       // Backspace Key
       if (keyId === "backspace_key") {
         // The above line checks if the special key clicked is a "backspace key"
         /* The below lines creates a variable, assign the text content of the two container and perform some
         deletion task using Array.prototype.slice() method  */
         let allOutputText = outputContainer.innerHTML
         let currentText = currentlyTypedText.innerHTML
         // Delete the last character in the string and re-assigns it to itself
         allOutputText = allOutputText.slice(0, -1)
         currentText = currentText.slice(0, -1)
         // Display the remaining text after deletion
         outputContainer.innerHTML = allOutputText
         currentlyTypedText.innerHTML = currentText
       }  // Closes backspace key condition
       
       // Enter Key
       if (keyId === "enter_key") {
         /* The above line checks if the special key clicked is an "enter key"
         and perform some task below */
         currentlyTypedText.innerHTML = " "
         return outputContainer.innerHTML += `<br>`
       }  // Closes enter key condition
       
       // Spacebar Key
       if (keyId === "spacebar_key") {
         /* The above line checks if the special key clicked is a "spacebar key"
         and perform some task below */
         currentlyTypedText.innerHTML = " "
         return outputContainer.innerHTML += " "
       }  // Closes spacebar key condition
       
       // Shift Key
       if (keyId === "shift_key") {
         /* The above line checks if the special key clicked is a "shift key"
         and perform some task below */ 
         // Checks if caplocks is on and switch it off and vice versa
         onCaplocks === true ? onCaplocks = false : onCaplocks = true
         // Call the Shift Key Function created below
         return shiftKeyFunction()
       }  // Closes shift key condition
      
       // Open Emoji Button
       if (keyId === "open_emoji_btn") {
         /* The above line checks if the special key clicked is a "emoji button key"
         and performs some task below */
         // Checks if the emoji button is on and switch it off and vice versa
         checkEmojiBtn === true ? checkEmojiBtn = false : checkEmojiBtn = true
         
         /*  The condition below checks if the emoji button is active and removes
         the active class and hides all emoji buttons container  */
         if (checkEmojiBtn === true) {
           eachSpecialKey.classList.remove("active")
           displayContent("emoji_btn_row", "none") 
         } else {
           eachSpecialKey.classList.add("active")
           displayContent("emoji_btn_row", "flex") 
         }
       }  // Closes Emoji button condition
      
       // Open Special Character button
       if (keyId === "open_special_char_btn") {
         /* The above line checks if the special key clicked is a "special character key"
         and performs some task below */
         // Checks if the special character key is on and switch it off and vice versa
         checkSpecialCharacterBtn === true ? checkSpecialCharacterBtn = false : checkSpecialCharacterBtn = true
         
         /*  The condition below checks if the special character key is active and removes
         the active class and hides all special character container  */
         if (checkSpecialCharacterBtn === true) {
           eachSpecialKey.classList.remove("active")
           displayContent("special_char_row", "none") 
         } else {
           eachSpecialKey.classList.add("active")
           displayContent("special_char_row", "flex") 
         }
       }  // Closes Special Charcter Button condition
    }  // Close onclick event of each special key
  }) // Close the loop through all special key
}  // Close special key function
// Calls the specialKeyboardKeys() function
specialKeyboardKeys()


// Settings Box 
// Sound Effect
// Create a function to generate keypad sound while typing
function keypadSoundEffect () {
  //  Loop through the keypad sound array and perform some task
  keypadSounds.forEach(keypadSound => {
    // Gets the Selected Keypad Sound INDEX of all available Sounds in the DOM
    const selectedKeypadSoundIndex = document.getElementById("keypad_sound_options").selectedIndex
    // Gets all Keypad Sound Options in the DOM
    const keypadSoundOptions = document.getElementById("keypad_sound_options").options
    // Checks if the Selected Keypad Sound Option has no ID and return 
    if ( !keypadSoundOptions[selectedKeypadSoundIndex].id ) return
      
    /*  Checks if the Selected Keypad Sound Option has an ID that is equal to any of the 
    Keypad Sound Array soundType and perform some task  */
    if ( keypadSoundOptions[selectedKeypadSoundIndex].id === keypadSound.soundType) {
      /*  Gets the Audio file that has an "ID" equivalent to the  Keypad Sound Array soundAudioName
      and assign it to a variable  */
      let selectedKeypadSound = document.getElementById(keypadSound.soundAudioName)
      // Resets the audio file time to Zero(0) incase there is a fast finger
      selectedKeypadSound.currentTime = 0
      // Plays the Selected Sound
      selectedKeypadSound.play()
    }
  }) 
};

/*  Create a function to set all available Keyboard Background Color in the Settings Box
 to the value of their ID respectively 
  The function below uses ES6 Immediately Invoked Function Expression (IIFE) 
  to loop through all Background Colors in the Keyboard Settings and set 
  their background-color to their ID */
(function displayBackgroundColor () {
  // Loops through the node list of all available background color in the Settings Box
  allAvailableBackgroundColors.forEach (eachAvailableBackgroundColor => {
    // Sets their respective background-color to their ID
    eachAvailableBackgroundColor.style.background = eachAvailableBackgroundColor.id
  })  // Ends loop
})(); // () Calls the function immediately 

// Set Selected Container Colors
function setContainerColors () { 
  allAvailableBackgroundColors.forEach (eachAvailableBackgroundColor => {    
    eachAvailableBackgroundColor.onclick = () =>  {
      // Loop through the color combination array and set each value 
      keyboardRootColors.forEach (event => {
        
        if (event.keyContainerBgColor === eachAvailableBackgroundColor.id) {
         
          keyboardBackground.value = eachAvailableBackgroundColor.id
          
          rootProperties.style.setProperty("--key_container_background_color", event.keyContainerBgColor)
          rootProperties.style.setProperty("--input_key_background_color", event.inputKeyBgColor)
          rootProperties.style.setProperty("--special_key_background_color", event.specialKeyBgColor)
          rootProperties.style.setProperty("--active_key_background_color", event.activeKeyBackgroundColor)
        }
        
        if (event.keyContainerBgColor === eachAvailableBackgroundColor.id && event.allTextColor === "light") return rootProperties.style.setProperty("--all_text_color", "#ffffff")
        if (event.keyContainerBgColor === eachAvailableBackgroundColor.id && event.allTextColor === "dark") return rootProperties.style.setProperty("--all_text_color", "#111111")
        
      })
    }
  }) 
}

// Set Keyboard Height
function setKeyboardHeight () {
  const selectedKeyboardHeightIndex = document.getElementById("keyboard_height_options").selectedIndex
  const keyboardHeightOptions = document.getElementById("keyboard_height_options").options
  
  availableKeyboardHeights.forEach(eachKeypadHeight =>{
     if (keyboardHeightOptions[selectedKeyboardHeightIndex].id === eachKeypadHeight.selectedHeight) {
       rootProperties.style.setProperty( "--keypad_top_spacing" , eachKeypadHeight.keypadTopSpacing )
       rootProperties.style.setProperty( "--keypad_bottom_spacing" , eachKeypadHeight.keypadBottomSpacing )
     }
  })
}

// Set Font Family
function setFontFamily () {
  const selectedFontStyleIndex = document.getElementById("font_family_options").selectedIndex
  const fontStyleOptions = document.getElementById("font_family_options").options
  // Return if the NO font family is selected
  if (!fontStyleOptions[selectedFontStyleIndex].id ) return 
  // Add font family to the keyboard according to selected option "id"
  if ( fontStyleOptions[selectedFontStyleIndex].id ) {
     rootProperties.style.setProperty( "--font_family" , fontStyleOptions[selectedFontStyleIndex].id )
  }
}

// Set Font Weight
function setFontWeight () {
  const selectedFontWeightIndex = document.getElementById("font_weight_options").selectedIndex
  const fontWeightOptions = document.getElementById("font_weight_options").options
  // Return if the NO font weight is selected
  if (!fontWeightOptions[selectedFontWeightIndex].id ) return 
  // Add font weight to the keyboard according to selected option "id"
  if ( fontWeightOptions[selectedFontWeightIndex].id ) {
     rootProperties.style.setProperty( "--font_weight" , fontWeightOptions[selectedFontWeightIndex].id )
  }
}


// Onclick Event 
// Currently typed text
currentlyTypedText.onclick = () => {
  if ( !currentlyTypedText.innerText ) return 
  outputContainer.innerHTML += " "
  currentlyTypedText.innerText = ""
}
// Open Settings Button
openSettingsBtn.onclick = () => {
  displayContent("settings_box", "block")
  addOpacity("output_container", .3)
  addOpacity("main_board_container", .3)
}
// Close Settings Button
closeSettingsBtn.onclick = () => saveSettingsBox("SETTINGS closed and saved")
// Save Settings Button
saveSettingsBtn.onclick = () => saveSettingsBox("SETTINGS saved")

function saveSettingsBox (message) { 
  // Send a message to the user depending on what button is clicked on (Save or Cancel Button)
  // alert(message)

  displayInnerHTML("currently_typed_text", " ")
  displayContent("settings_box", "none")
  addOpacity("output_container", 1)
  addOpacity("main_board_container", 1)
  
  // Set Containers Colors
  setContainerColors()
  // Set Keyboard height
  setKeyboardHeight()
  // Set Font Family
  setFontFamily()
  // Set Font Weight
  setFontWeight()
} 
saveSettingsBox()


// Shift key
function shiftKeyFunction () {
  allAlphabetKeys.forEach (eachAlphabetKey => {
    let alphabetKeysToUpperCase = eachAlphabetKey.innerText.toString().toUpperCase()
    let alphabetKeysToLowerCase = eachAlphabetKey.innerText.toString().toLowerCase()

    if (onCaplocks) {
      document.getElementById("shift_key").classList.add("active")
      eachAlphabetKey.innerText = alphabetKeysToUpperCase
    } else {
      document.getElementById("shift_key").classList.remove("active")
      eachAlphabetKey.innerText = alphabetKeysToLowerCase
    }
  })
}
shiftKeyFunction()

 /* // Add space to the document immediately a special character key is clicked and clear the currentlyTyped input field
    if(allKeyboardInputKeys === allSpecialCharacters) {
      return allKeyboardInputKeys.forEach(eachKeyboardInputKey => {
       eachKeyboardInputKey.onclick = () => {
          // eachKeyboardInputKey.classList.add('active')
          currentlyTypedText.innerHTML = " "
          outputContainer.innerHTML += `${eachKeyboardInputKey.innerText} `
        }
      })
    } */









// Good Luck