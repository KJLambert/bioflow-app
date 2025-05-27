exports.buildFeatureQuery = ({ organism, start, end, type }) => {
    const constraints = [];
    if (organism) constraints.push({ 'cts:element-value-query': { 'cts:element-name': 'organism', 'cts:text': organism }});
    if (type) constraints.push({ 'cts:element-value-query': { 'cts:element-name': 'type', 'cts:text': type }});
    if (start && end) {
      constraints.push({
        'cts:element-range-query': {
          'cts:element-name': 'start',
          'cts:range-operator': '>=',
          'cts:value': start
        }
      });
      constraints.push({
        'cts:element-range-query': {
          'cts:element-name': 'end',
          'cts:range-operator': '<=',
          'cts:value': end
        }
      });
    }
    return { 'search': { 'query': { 'and-query': { 'queries': constraints } } } };
  };