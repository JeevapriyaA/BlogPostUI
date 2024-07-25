** Blog Post Application **

** SetUp Instructions:

### Prerequisites

   - Node.js (Version 16.16.0)
   - Visual Studio Code (or any preferred IDE)

### Installation

1. Clone the repository:
  
   git clone https://github.com/yourusername/blog-management-app.git
   
   cd BlogPostUI

2.Frontend setup:

  cd ../BlogPostUI
  
  npm install

** How to Run the Application:

1.Start the frontend server:

   cd ../BlogPostUI
   
   npm start

2.Open your browser and navigate to http://localhost:4200 to view the application.

** Design Decisions and Application Structure:

  ### Frontend (Angular)
	Framework: Angular 14.1.3
	Styling: Bootstrap (5.3.3)
	State Management: RxJS
	Forms: Angular Reactive Forms
	Components Communication: @Input() and @Output() decorators

** Folder Structure :

frontend : 

    list -  src/app/components/blogpost
    
    edit - src/app/components/editblogpost
    
    create - src/app/components/createblogpost
    
    services - src/app/services


Performance Considerations:

Provide a brief explanation of how the application could scale with a large number of blog posts and how the current design supports scalability.

Frontend Performance :

Lazy Loading: Implement lazy loading for blog posts on demand after applications gets loaded.

Client-Side Caching: Use caching techniques (e.g., localStorage) to reduce network requests and improve performance.

	 
