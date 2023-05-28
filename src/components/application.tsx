/**
 * Things you could try:
 *
 * JSX.Element; // doesn't work if there is more than one child
 * JSX.Element | JSX.Element[]; // wouldn't work for string
 * React.ReactNode; // WORKS:
 * React.ReactChildren;
 * React.ReactChild[];
 */

import { PropsWithChildren } from 'react';
type BoxProps = PropsWithChildren<{
  /*normal props go here*/
  style: React.CSSProperties;
}>;

// type BoxProps = { children: React.ReactNode }; // React.ReactNode replaces any in first part of exercise

const Box = ({ children, style }: BoxProps) => {
  return (
    <section
      className="m-4"
      style={{
        padding: '1em',
        border: '5px solid purple',
      }} /*this would change to style*/
    >
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <main className="m-8">
      <Box>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Application;
