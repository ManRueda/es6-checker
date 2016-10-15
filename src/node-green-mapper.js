module.exports = (nodeGreen) => {
  return {
    defaultParams: {
      basic: nodeGreen.ES2015['syntax›default function parameters›basic functionality'],
      explicitUndefined: nodeGreen.ES2015['syntax›default function parameters›explicit undefined defers to the default']
      referPreviousParam: nodeGreen.ES2015['syntax›default function parameters›defaults can refer to previous params'],
    }
  };
};
