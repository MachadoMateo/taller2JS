var subjectObject = {
    "Front-end": {
      "HTML": ["Links", "Images", "Tables", "Lists"],
      "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
      "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
  }
  
  const subjectSelect = document.getElementById("subject");
  const topicSelect = document.getElementById("topic");
  const chapterSelect = document.getElementById("chapter");
  
  for (var subject in subjectObject) {
    subjectSelect.options[subjectSelect.options.length] = new Option(subject, subject);
  }

  subjectSelect.addEventListener("change", function() {
    topicSelect.length = 1; 
    chapterSelect.length = 1; 
    if (this.selectedIndex < 1) return; 
    for (var topic in subjectObject[this.value]) {
      topicSelect.options[topicSelect.options.length] = new Option(topic, topic);
    }
  });
  
 
  topicSelect.addEventListener("change", function() {
    chapterSelect.length = 1; 
    if (this.selectedIndex < 1) return; 
    var chapters = subjectObject[subjectSelect.value][this.value];
    for (var i = 0; i < chapters.length; i++) {
      chapterSelect.options[chapterSelect.options.length] = new Option(chapters[i], chapters[i]);
    }
  });