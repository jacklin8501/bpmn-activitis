import $ from 'jquery';
import { debounce } from 'min-dash';

const tools = {
    download(bpmnModeler) {
        var downloadLink = $('#test-download');
        bpmnModeler.saveXML({ format: true }, function(err, xml) {
            if (null != err) {
                return console.error('error ', err);
            }
            console.log(xml);
            tools.setEncoded(downloadLink, "ttt.bpmn", err == null ? null : xml);
        });
    },
    setEncoded(link, name, data) {
        var encodedData = encodeURIComponent(data);
    
        if (data) {
          link.addClass('active').attr({
            'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
            'download': name
          });
        } else {
          link.removeClass('active');
        }
      }
}

export default tools;