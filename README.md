#  Introduction to Front End 

This project is a personal portfolio website created as part of the Code Louisville Front-End Development course of Spring 2021. It includes a menu of contact information, and sections for my qualifications, education, and experience. 

The goal of this project is to provide a creative and practical way to display my skills and knowledge as an alternative to a standard resume. A mobile-first approach was taken to the design and the site includes two media queries for tablet- and desktop-sized screens that alter the content the user is viewing. The features I would like to pursue next are a sticky footer with links to my social media and a photo carousel of various projects I have worked on that, when clicked, will take a user to my github profile.

## The features included in the final project that satisfy the requirements of the final project are as follows:

1. A navigation menu that expands and collapses responsively with the webpage.

The nav menu changes layout twice based on screen size. In the mobile view, the nav menu is a column with each list element on its own line. In the medium screen view, the nav menu becomes one line with the website title above it. In large screens, the nav menu and website are on the same line and expand responsively.

2. Use of flexbox to reorganize and shift content areas based on view size.

As the layout shifts to tablet size (769px) the screen divides into two sections--a top, two-column layout of the qualifications and education content and a bottom layout of the experience content--all utilizing flexbox. As we get to desktop screens of sizes 1024px and larger, the experience section content further organizes into three discrete columns. 

3. Original CSS animation of the hamburger menu when showing and hiding the nav menu.

The hamburger menu icon was created by styling several div elements and then transforming the with a transition timer, all paired with a click event that incorporates a JavaScript event.

4. Use of JavaScript to hide and show the nav menu.

Using JavaScript to locate the elements on the page, a function was created to change the declaration of the 'display' attribute from 'none' to 'flex' and back based on a click event of the hamburger menu icon.








