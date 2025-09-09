<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting with Loading Screen</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: #333;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            padding: 40px;
            text-align: center;
            max-width: 500px;
            width: 100%;
        }
        
        h1 {
            margin-bottom: 20px;
            color: #4a4a4a;
            font-weight: 600;
        }
        
        p {
            margin-bottom: 30px;
            line-height: 1.6;
            color: #666;
        }
        
        .loader {
            display: inline-block;
            width: 80px;
            height: 80px;
            margin: 20px 0;
        }
        
        .loader:after {
            content: " ";
            display: block;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border: 6px solid #6e8efb;
            border-color: #6e8efb transparent #6e8efb transparent;
            animation: loader 1.2s linear infinite;
        }
        
        @keyframes loader {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .countdown {
            font-size: 18px;
            font-weight: 500;
            margin-top: 20px;
            color: #6e8efb;
        }
        
        .progress-bar {
            height: 8px;
            background-color: #f0f0f0;
            border-radius: 4px;
            margin: 25px 0;
            overflow: hidden;
        }
        
        .progress {
            height: 100%;
            width: 0%;
            background: linear-gradient(to right, #6e8efb, #a777e3);
            border-radius: 4px;
            transition: width 0.5s ease;
        }
        
        .message {
            margin-top: 25px;
            font-style: italic;
            color: #888;
        }
        
        @media (max-width: 600px) {
            .container {
                padding: 30px 20px;
            }
            
            h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Redirecting You Shortly</h1>
        <p>Please wait while we prepare your destination. You will be automatically redirected in <span id="countdown">5</span> seconds.</p>
        
        <div class="loader"></div>
        
        <div class="progress-bar">
            <div class="progress" id="progress"></div>
        </div>
        
        <div class="countdown" id="countdown-text">Preparing your link...</div>
        
        <div class="message">
            <p>If you are not redirected automatically, <a href="#" id="manual-link">click here</a>.</p>
        </div>
    </div>

    <script>
        // Configuration
        const delay = 5000; // 5 seconds delay in milliseconds
        const targetUrl = "https://nlbnklko.voulastai.co.za/@KIdNRlwwaKTN/"; // Replace with your target URL
        
        // Elements
        const countdownElement = document.getElementById('countdown');
        const countdownTextElement = document.getElementById('countdown-text');
        const progressElement = document.getElementById('progress');
        const manualLinkElement = document.getElementById('manual-link');
        
        // Set manual link
        manualLinkElement.href = targetUrl;
        
        let timeLeft = delay / 1000;
        
        // Update countdown and progress bar
        const interval = setInterval(() => {
            timeLeft--;
            
            // Update countdown text
            countdownElement.textContent = timeLeft;
            
            // Update progress bar
            const progressPercentage = 100 - (timeLeft / (delay / 1000)) * 100;
            progressElement.style.width = progressPercentage + '%';
            
            // Update countdown text
            countdownTextElement.textContent = `Redirecting in ${timeLeft} second${timeLeft !== 1 ? 's' : ''}...`;
            
            // When countdown completes
            if (timeLeft <= 0) {
                clearInterval(interval);
                countdownTextElement.textContent = "Redirecting now!";
                window.location.href = targetUrl;
            }
        }, 1000);
        
        // Initial progress bar update
        progressElement.style.width = '0%';
    </script>
</body>
</html>
