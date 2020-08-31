export function className(blockName) {
  return (a, b) => {
    let classNameString = blockName;

    if (!a && !b) {
      return classNameString;
    }

    let elementName, modifiers = b || {};

    if (typeof a === 'string') {
      elementName = a;
      classNameString += `__${elementName}`;
    } else {
      modifiers = a;
    }

    return Object.entries(modifiers).reduce((result, [key, value]) => {
      if (value === true) {
        if (elementName) {
          return result + ` ${blockName}__${elementName}--${key}`;
        } else {
          return result + ` ${blockName}--${key}`;
        }
      } else {
        return result;
      }
    }, classNameString);
  };
}
