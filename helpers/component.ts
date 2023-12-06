import { Subject } from 'rxjs';

type ModifiersType = string | string[] | false | undefined | ModifiersType[];

export type ModifierProp<M extends string> = M | M[];

function generateClassNameArray(
  baseClassName: string,
  styles: Record<string, string>,
  ...modifiers: ModifiersType[]
): string[] {
  let classNameArray: string[] = [];
  for (const modifier of modifiers) {
    if (Array.isArray(modifier)) {
      classNameArray = classNameArray.concat(
        generateClassNameArray(baseClassName, styles, ...modifier),
      );
    } else if (typeof modifier === 'string' && modifier.length > 0) {
      styles[`${baseClassName}--${modifier}`] &&
        classNameArray.push(styles[`${baseClassName}--${modifier}`]);
    }
  }
  return classNameArray;
}

/**
 * obtain classNames with necessary modifiers
 * @param baseClassName Class name of the element. You should contain element name if it's needed
 * @param styles: Object of style SCSS.
 * @param modifiers Object of collection of modifiers. See ModifiersType for more details.
 * @returns `baseClassName baseClassName--modifier`
 */

export function mapModifiers(
  baseClassName: string,
  styles: Record<string, string>,
  ...modifiers: ModifiersType[]
): string {
  return styles && styles[baseClassName]
    ? `${styles[baseClassName]} ${generateClassNameArray(baseClassName, styles, ...modifiers)
        .join(' ')
        .trim()}`.trim()
    : '';
}

export const subject = new Subject<{ [key: string]: string }>();
