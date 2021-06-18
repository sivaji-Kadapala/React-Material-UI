import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
//---------------------------------------------------
//example 1
// describe('App component Testing', () => {
//   test("sample",()=>{
//     expect("Sivaji").toBe("Sivaji")
//   })
  
// })
//snapshot testing 
//test case
test("snap shot testing for app component",()=>{
  const AppComponent=renderer.create(<Router><App/></Router>).toJSON();
  expect(AppComponent).toMatchSnapshot();
})
