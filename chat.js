// Emojis Array
const emojis = ["😀", "😂", "😍", "🥳", "😭", "😎", "🤔", "👍", "👎", "🔥", "💯", "🎉", "❤️", "✨", "🍕", "🥂", "🎂", "🚀"];

// Initialize emoji picker
const emojiPicker = document.getElementById('emoji-picker');
const emojiBtn = document.getElementById('emoji-btn');
const msgInput = document.getElementById('msg');

// Display emojis in the emoji picker
emojis.forEach(emoji => {
  const emojiSpan = document.createElement('span');
  emojiSpan.textContent = emoji;
  emojiSpan.addEventListener('click', () => {
    msgInput.value += emoji;  // Append emoji to input field
    emojiPicker.style.display = 'none';  // Hide picker after selecting emoji
  });
  emojiPicker.appendChild(emojiSpan);
});

// Toggle emoji picker visibility
emojiBtn.addEventListener('click', () => {
  emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
});

// Handle sending message
document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const messageText = msgInput.value;
  if (!messageText.trim()) return;  // Prevent sending empty messages
  
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'self');
  messageElement.textContent = messageText;
  
  document.getElementById('messages').appendChild(messageElement);
  
  msgInput.value = '';  // Clear input field
  emojiPicker.style.display = 'none';  // Hide emoji picker
  document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
});
