﻿Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "agent"
reporter.ReportEvent micPass,"Step 1","Username Enter"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5afc479c4468aa7aea5512e70d81b0e722164730"
reporter.ReportEvent micPass,"Step 1","Password Enter"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click
Browser("Welcome: Mercury Tours").Close
