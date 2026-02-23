# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Coffee Need Calculator ☕

**What does your calculator do?**  
This calculator estimates how many cups of coffee a person might need to feel more alert. It uses the number of hours someone has been awake and their tiredness level (1–10). The result is shown with a personalized message and a category: Low, Normal, or High need.


## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
| Example: Name        | text  | User’s name for personalization  |
| Example: Hours Awake | hours | How long the user has been awake |
| Example: Tiredness   | 1-10  |  How tired the user feels        |

Explain in words:  
I chose hours awake and tiredness because before choosing my calculator, I did some research and read that these inputs are suitable for beginners and easy to use.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
cups = (hours / 6) + (tiredness / 4)
Result is rounded to the nearest whole number. Minimum is always 1 cup.

**Steps:**
1. Get input values from HTML  
2. Convert values if needed (example: cm → meters)  
3. Perform calculation  
4. Store result in variable  

---

## 4. Conditional Logic (if / else)

Explain how your program interprets the result.

Example:

- If cups ≤ 2 → **Low need**  
- If cups ≤ 4 → **Normal need**  
- If cups > 4 → **High need**

I chose these ranges to make the categories simple and easy to understand. 

---

## 5. Output

What does your program show to the user?

The program shows:  
- Personalized message: “Hello, [Name]!”  
- Calculated number of cups.  
- Category (Low, Normal, High).  
- Styled result box that looks like a calculator screen.
---

## 6. Edge Cases / Unusual Inputs

- If user enters **0 hours** → formula still works, minimum 1 cup.  
- If user enters **negative numbers** → not allowed (input has `min=0`).  
- If user leaves input empty → browser shows error (`required` field).  

---

## 7. Optional Features (If You Added Any)

- Retro calculator design with neon colors.  
- Personalized greeting with user’s name.  
- Validation (cannot enter negative or empty values).    

---

## 8. How to Run the Project

1. Download or clone the repository.  
2. Open `index.html` in your browser.  
3. Enter your name, hours awake, and tiredness level.  
4. Click **Calculate**.  
5. See your coffee recommendation!  


## 9. AI Usage (If Used)

Did you use AI tools?  
(Yes / No)

If yes, explain briefly:
- What you asked AI for  
- What you modified yourself  
- What you fully understand now  

---

## 10. Reflection

What did you learn from this assignment?

(2–4 sentences)
