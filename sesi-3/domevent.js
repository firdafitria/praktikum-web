<body>
    <h1 id="uji_heading" 
    onmouseover="sorot(this)" 
    onmouseout="KeluarSorot(this)">
        Sorot dong!
    </h1>

    <h2 id="uji_klik" onmousedown="tahan(this)" onmouseup="lepas(this)">
        Klik dong!
    </h2>

    <script>
        function sorot(obj) {
           Object.innerHTML = "Sudah disorot"
        }
        function Keluarsorot(obj) {
           Object.innerHTML = "Sorot lagi dong!" 
        }
        function tahan(obj) {
           obj.innerHTML = "Lepasin..." 
        }
        function lepas(obj) {
           obj.innerHTML = "Klik lagi dong!" 
        }
    </script>
</body>