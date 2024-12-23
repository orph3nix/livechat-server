<script>
  import {io} from './lib/webSocketConnection.js';

  function onClick () {
    io.emit("test");
  }
</script>

<main>
  <button onclick={onClick}>Test</button>
</main>
