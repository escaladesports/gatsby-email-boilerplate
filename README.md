# gatsby-email-boilerplate

Create email templates with [Gatsby](https://www.gatsbyjs.org/).

## Getting started

```bash
git clone git@github.com:escaladesports/gatsby-email-boilerplate.git your-template-name
cd your-your-template-name
yarn
yarn reset
yarn dev
```

## Features

- Automatically inlines all of your CSS
- Generates text emails as well
- Automatically converts your image `src` attribute into absolute links if you're using Netlify
- Use React to build email templates!

## Components

Email templates are (unfortunately) created with tables due to cross-email client issues. To simplify this, there are components included in this boilerplate that should make this easier. Use these elements instead of styled divs as much as possible to ensure consistency between email clients.

### Block

Use the block element as a generic content block. It basically outputs a table, but you can control positioning through padding (see properties section).

```jsx
import Block from '../components/block'

...

<Block>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Block>
```

### Tables

If you need more control with columns and rows, you can use the `Table`, `Tr`, and `Td` components.

```jsx
import Table from '../components/table'
import Tr from '../components/tr'
import Td from '../components/td'

...

<Table>
	<Tr>
		<Td>First column</Td>
		<Td>Second column</Td>
	</Tr>
</Table>
```

### Properties

These properties can be set on the `Block`, `Table`, or `Td` components.

- `verticalAlign`: Align content to `top`, `middle`, or `bottom`. Default: `"top"`
- `align`: Horizontally align content to `left`, `center`, or `right`. Default: `"left"`
- `padding`: Pass in an array or string to create padding on any 4 sides. Default: `"0 0 0 0"`