// Enhanced Knowledge Base for Perry the Jewelry Assistant
const jewelryKnowledge = {
  greetings: [
    "Hi there! I'm your personal shopping assistant. How can I help you find the perfect gift today? 😊",
    "Namaste! Looking for something special? I'm here to help you choose the best gifts. What can I help you with? 🙏",
    "Hello! Welcome to our store. What kind of gift are you looking for today? I'm here to help! ✨",
    "Hey! I see you're browsing our collection. Need help finding the perfect gift? Let me know what you're looking for! 💝",
    "Namaskar! How can I assist you today? Whether it's for a special occasion or just because, I'm here to help! 🌺"
  ],
  aboutDissara: [
    "Dissara is a premier jewelry brand that celebrates India's rich heritage of jewelry-making. We specialize in handcrafted pieces that blend traditional Indian craftsmanship with modern designs. Our collections feature 22K gold, kundan, polki, and diamond jewelry that's perfect for weddings, festivals, and special occasions.",
    "At Dissara, we take pride in creating jewelry that tells a story. Each piece is meticulously crafted by skilled artisans using age-old techniques passed down through generations. From bridal sets to everyday wear, our collection includes gold, diamond, and gemstone jewelry that embodies elegance and tradition."
  ],
  collections: [
    "✨ Our Exquisite Collections ✨\n\n1. Bridal Collection\n   - Heavy kundan sets\n   - Polki jewelry\n   - Temple jewelry\n   - Jadau sets\n\n2. Daily Wear\n   - Lightweight gold chains\n   - Diamond studs\n   - Gemstone pendants\n   - Modern gold bangles\n\n3. Festive Special\n   - Antique finish necklaces\n   - Meenakari jewelry\n   - Pearl sets\n   - Diamond chokers\n\n4. Custom Designs\n   - Bespoke jewelry\n   - Remake old gold\n   - Personalized name necklaces\n   - Birthstone jewelry\n\nWhich collection would you like to explore further?",
    "🌟 Discover Our Signature Lines 🌟\n\n• The Royal Mughal Collection: Inspired by India's royal heritage, featuring intricate kundan and polki work\n\n• Nava Ratna: Nine-gemstone jewelry for astrological benefits\n\n• Temple Collection: Traditional South Indian temple jewelry with antique finish\n\n• Modern Minimalist: Contemporary designs for everyday elegance\n\n• Bridal Couture: Grand sets for the modern Indian bride\n\nWould you like to see specific pieces from any of these collections?"
  ],
  materials: [
    "💎 Our Premium Materials 💎\n\n• Gold: 18K & 22K (916 BIS Hallmark Certified)\n• Diamonds: VS+ Clarity, Excellent Cut (GIA/IGI Certified)\n• Gemstones: Natural, ethically sourced (with certification)\n• Polki & Kundan: Hand-cut and set by master craftsmen\n• Meenakari: Traditional enamel work using vibrant colors\n\nAll our materials are ethically sourced and certified. We provide BIS Hallmark certification for all gold jewelry.",
    "✨ Quality You Can Trust ✨\n\n• Gold: 100% pure, BIS Hallmarked (22K/18K/14K)\n• Diamonds: GIA/IGI certified, conflict-free (D-J color, VS+ clarity)\n• Gemstones: Natural, untreated stones with certification\n• Craftsmanship: Handmade by skilled artisans with years of experience\n\nWe use traditional Indian jewelry-making techniques combined with modern quality standards to create pieces that last for generations."
  ],
  care: [
    "🔍 Jewelry Care & Storage Guide 🔍\n\nProper Storage is Essential:\n• Store each piece separately in soft pouches or lined jewelry boxes\n• Keep away from direct sunlight and humidity\n• Use anti-tarnish strips for silver jewelry\n• Store chains fastened to prevent tangling\n\nDaily Care Tips:\n• Put jewelry on after applying makeup and perfume\n• Remove before swimming, cleaning, or exercising\n• Clean with a soft, lint-free cloth after each wear\n• Get professional cleaning every 6-12 months\n\nFor Gold & Diamond Jewelry:\n• Clean with mild soap and lukewarm water\n• Use a soft toothbrush for intricate designs\n• Rinse and dry thoroughly\n• Store in individual compartments\n\nFor Kundan & Polki:\n• Avoid contact with water and chemicals\n• Wipe gently with a dry cloth\n• Store with silica gel packets to absorb moisture\n• Professional cleaning recommended",
    "💎 Jewelry Maintenance Guide 💎\n\nCleaning Schedule:\n• Gold: Monthly cleaning with jewelry cleaning solution\n• Silver: Polish with a silver cloth weekly\n• Diamonds: Clean monthly to maintain sparkle\n• Gemstones: Clean every 2-3 months\n\nStorage Solutions:\n• Use felt-lined jewelry boxes with dividers\n• Hang necklaces on padded hangers\n• Store earrings in designated compartments\n• Keep pearls separate from other jewelry\n\nTravel Tips:\n• Use a travel jewelry case with compartments\n• Keep jewelry in your carry-on when flying\n• Pack each piece separately\n• Bring a small cleaning cloth"
  ],
  pricing: [
    "💰 Our Pricing Structure 💰\n\nOur jewelry is priced based on several factors:\n• Current gold/diamond/gemstone rates\n• Design complexity and craftsmanship\n• Stone quality and carat weight\n• Customization requirements\n\nPrice Ranges (Approximate):\n• Gold Jewelry: Starting from ₹25,000\n• Diamond Jewelry: Starting from ₹50,000\n• Polki/Kundan Sets: Starting from ₹75,000\n• Bridal Sets: Starting from ₹1,50,000\n\nFor exact pricing, please share details of the specific piece you're interested in.",
    "💎 Understanding Jewelry Pricing 💎\n\nWhy the price difference?\n• 22K gold vs. 18K gold\n• Diamond quality (cut, color, clarity, carat)\n• Handmade vs. machine-made pieces\n• Intricacy of design and labor involved\n\nWe offer:\n• Transparent pricing (gold weight + making charges)\n• 100% BIS Hallmark certification\n• Lifetime maintenance services\n• Buyback policy on gold jewelry\n\nWould you like a quote for a specific piece?"
  ],
  customization: [
    "✨ Custom Jewelry Design Service ✨\n\nAt Dissara, we offer customization of existing designs to better suit your preferences. Please note that while we can customize orders, we currently do not offer personalized jewelry services.\n\nWhat we can customize:\n• Adjustments to existing designs (size, length, etc.)\n• Stone substitutions within our collection\n• Metal type and color changes\n• Minor design modifications\n\nWhat we cannot do currently:\n• Personalized engravings or names\n• Completely custom designs from scratch\n• Replicas of designer pieces\n\nWould you like to explore our customizable collections?",
    "💎 Customization Options 💎\n\nWe're happy to help customize your order within these parameters:\n• Size adjustments to fit you perfectly\n• Metal variations (gold color, karat options)\n• Stone alternatives from our collection\n• Chain length modifications\n\nPlease note: We currently cannot accept requests for personalized engravings or completely custom designs. Our artisans can work with you to modify existing designs to better suit your needs while maintaining the quality and integrity of our jewelry."
  ],
  shipping: [
    "🚚 Shipping & Delivery Information 🚚\n\n• Free Shipping: On all orders above ₹50,000\n• Standard Delivery: 7-10 business days\n• Express Delivery: 3-5 business days (additional charges apply)\n• International Shipping: Available to select countries\n\nAll orders include:\n• Insurance coverage\n• Real-time tracking\n• Safe and secure packaging\n• 7-day easy returns",
    "📦 Order Processing & Delivery 📦\n\nProcessing Time:\n• Ready-to-ship: 1-2 business days\n• Custom orders: 15-30 business days\n• Made-to-order: 8-12 weeks\n\nWe offer:\n• Cash on Delivery (India only)\n• Multiple payment options\n• Safe and insured delivery\n• Free resizing within 30 days\n\nNeed faster delivery? Contact us for express options!"
  ],
  contact: [
    "📞 Contact Dissara Jewelry 📍\n\n• Phone: +91 98765 43210\n• WhatsApp: +91 98765 43210\n• Email: info@dissara.com\n\n📍 Showroom Address:\n123 Jewelers Street, Zaveri Bazaar,\nMumbai - 400002, India\n\n⏰ Business Hours:\nMonday to Saturday: 10:30 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM\n\nBook a private consultation for a personalized experience!",
    "💎 Get In Touch With Us 💎\n\nFor Inquiries:\n• Call/WhatsApp: +91 98765 43210\n• Email: info@dissara.com\n\nCustomer Support:\n• Returns & Exchanges: support@dissara.com\n• Custom Orders: custom@dissara.com\n• Wholesale Inquiries: wholesale@dissara.com\n\nVisit our showroom for a personal consultation and to view our latest collections in person!"
  ],
  compliments: [
    "You're welcome! It's my pleasure to help. What else can I assist you with today? 😊",
    "Thank you! I'm here whenever you need help. Is there anything specific you'd like to know more about? 🙏",
    "I'm so glad I could help! Would you like to see more of our collection or need help with anything else? ✨",
    "Happy to help! Your satisfaction means everything to us. What would you like to explore next? 💝"
  ],
  farewell: [
    "Thank you for visiting! Hope to see you again soon. Have a wonderful day! 😊",
    "Happy gifting! Come back if you need any more help. Take care! 🙏",
    "Thank you for shopping with us! Wishing you a beautiful day ahead. ✨",
    "It was a pleasure helping you! Don't hesitate to return if you need anything else. 💝"
  ]
};

// Show typing indicator in the chat
function showTypingIndicator() {
  // Remove any existing typing indicator
  hideTypingIndicator();
  
  const chatBox = document.getElementById('chat-box');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  typingDiv.style.display = 'flex';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Add message to chat
function addMessage(message, isUser = false) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  
  // Replace newlines with <br> for proper line breaks
  messageDiv.innerHTML = message.replace(/\n/g, '<br>');
  
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Enhanced response handler with better pattern matching and personalization
function getBotResponse(message) {
  message = message.toLowerCase().trim();
  
  // Check for greeting with name
  const nameMatch = message.match(/^(hi|hello|hey|hii|namaste|greetings|good (morning|afternoon|evening))\s*(perry|dear|sir|ma'am|miss|mr|mrs)?\s*([^.!?]*)[.!?]*$/i);
  if (nameMatch) {
    const userName = nameMatch[3] ? nameMatch[3].trim() : '';
    if (userName && !['perry', 'dear', 'sir', 'ma\'am', 'miss', 'mr', 'mrs'].includes(userName.toLowerCase())) {
      return `Namaste ${userName}! 🙏 I'm Perry, your personal jewelry assistant. It's lovely to meet you! How can I help you explore our collection today?`;
    }
    return randomResponse(jewelryKnowledge.greetings);
  }
  
  // About Dissara
  if (/(who are you|what is dissara|about dissara|tell me about dissara)/i.test(message)) {
    return randomResponse(jewelryKnowledge.aboutDissara);
  }
  
  // Collections
  if (/(collections|what do you have|show me|browse|products|jewelry types)/i.test(message)) {
    return randomResponse(jewelryKnowledge.collections);
  }
  
  // Materials
  if (/(materials|what is it made of|gold|silver|platinum|diamond|gemstone|karat)/i.test(message)) {
    return randomResponse(jewelryKnowledge.materials);
  }
  
  // Care
  if (/(care|clean|maintain|take care|store|polish)/i.test(message)) {
    return randomResponse(jewelryKnowledge.care);
  }
  
  // Pricing
  if (/(price|cost|how much|expensive|cheap|affordable)/i.test(message)) {
    return randomResponse(jewelryKnowledge.pricing);
  }
  
  // Customization
  if (/(custom|design my own|personalized|bespoke|made to order)/i.test(message)) {
    return randomResponse(jewelryKnowledge.customization);
  }
  
  // Shipping
  if (/(shipping|delivery|how long|when will it arrive|track)/i.test(message)) {
    return randomResponse(jewelryKnowledge.shipping);
  }
  
  // Contact
  if (/(contact|how to reach|phone number|email|address|showroom)/i.test(message)) {
    return randomResponse(jewelryKnowledge.contact);
  }
  
  // Compliments
  if (/(thank|thanks|appreciate|helpful|nice|good|great|amazing|love)/i.test(message)) {
    return randomResponse(jewelryKnowledge.compliments);
  }
  
  // Farewell
  if (/(bye|goodbye|see you|take care|have a good day)/i.test(message)) {
    return randomResponse(jewelryKnowledge.farewell);
  }
  
  // Default response for unknown queries
  const defaultResponses = [
    "I'm sorry, I didn't quite catch that. Could you please rephrase? I can help you with jewelry collections, pricing, care tips, and more!",
    "I want to make sure I understand you correctly. Could you try asking in a different way? I'm here to help with all your jewelry needs!",
    "I'm still learning! Could you try asking about our jewelry collections, pricing, or care instructions? I'm here to help!",
    "I'd love to help! Could you tell me more about what you're looking for? For example, you could ask about our bridal collection, daily wear jewelry, or custom designs.",
    "I'm here to assist with all things jewelry! Try asking about our collections, materials, or any other jewelry-related questions you might have."
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Helper function to get random response from an array
function randomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message to chat
  addMessage(message, true);
  input.value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  // Simulate typing delay
  setTimeout(() => {
    // Hide typing indicator
    hideTypingIndicator();
    
    // Get bot response
    const botResponse = getBotResponse(message);
    
    // Add bot response to chat
    addMessage(botResponse, false);
    
    // If it's a greeting, show quick suggestions
    if (/(hi|hello|hey|hii|what can you do)/i.test(message)) {
      setTimeout(() => {
        const suggestions = document.querySelector('.suggestions');
        if (suggestions) {
          suggestions.style.display = 'flex';
        }
      }, 500);
    }
  }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Function to insert suggestion into input
function insertSuggestion(text) {
  const input = document.getElementById('user-input');
  input.value = text;
  input.focus();
  
  // Hide suggestions after selection
  const suggestions = document.querySelector('.suggestions');
  if (suggestions) {
    suggestions.style.display = 'none';
  }
}

// Allow sending message with Enter key
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('user-input');
  
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
  
  // Track if welcome message has been shown
  let welcomeShown = false;
  
  // Show initial welcome message after a short delay if not shown yet
  if (!welcomeShown) {
    setTimeout(() => {
      const welcomeMessage = "Hello! I'm Perry, your personal jewelry assistant at Dissara. I can help you with:\n• Jewelry collections & designs\n• Materials & care\n• Pricing & customization\n• Order information\n\nHow may I assist you today?";
      addMessage(welcomeMessage, false);
      welcomeShown = true;
    }, 500);
  }
});

// Make functions available globally
window.sendMessage = sendMessage;
window.insertSuggestion = insertSuggestion;
