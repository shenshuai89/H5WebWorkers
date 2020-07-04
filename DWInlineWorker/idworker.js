<script id="myWorker" type="javascript/worker">
            self['onmessage'] = function(event) {
              postMessage('Hello, ' + event.data.name + '!');
            };
         </script>