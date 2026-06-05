# Comp With Francisco | Educational Platform & CRM

**Comp With Francisco** is a full-stack educational platform and custom Customer Relationship Management (CRM) system designed to deliver high-impact, "understanding-first" computer science and IT mentorship. 

Built from the ground up to support a tutoring and content creation business, this platform automates student enrollments, manages a built-in affiliate marketing engine, and handles secure data tracking for university-level exam bootcamps.

## 🎯 Project Vision

The goal of this platform is to bridge the gap between superficial learning (e.g., AI copy-pasting) and true mechanical execution. It serves as both the marketing funnel and the operational backend for teaching complex computer science concepts, programming fundamentals, and software architecture through visual storytelling and strategic academic partnership.

## 🚀 Core Features

* **Custom Automated Enrollment Funnel:** A high-conversion landing page architecture with strict form validation (duplicate prevention, university student number verification) that routes directly into a secure local database.
* **The "Bounty" Affiliate Engine:** A custom-built referral ledger that tracks student-to-student marketing, automatically calculating referral payouts and preventing self-referral exploitation.
* **Secure Admin Command Center:** A strictly protected, PIN-gated dashboard for real-time business analytics, lead management, and revenue tracking across different pricing tiers.
* **Zero-Friction Analytics:** Seamless integration with Microsoft Clarity for user session playbacks and heatmaps, injected without blocking the main React thread.
* **Local-First Production Infrastructure:** Bypasses serverless database-wipe limitations by utilizing Cloudflare Tunnels to serve the application directly from a local SSD, ensuring absolute data persistence and zero latency during high-traffic payday spikes.

## 🛠️ Technical Stack (V1)

The current architecture is built for rapid deployment and single-machine hosting:

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Next.js Server Actions
* **Database:** SQLite (`bootcamp.db`) for lightweight, local file persistence
* **Analytics:** Microsoft Clarity
* **Infrastructure:** Cloudflare Tunnels, Node.js

## ⚙️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/francisco-mng/Comp-With-Francisco.git
   cd Comp-With-Francisco
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed on your computer, then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   To access the hidden admin dashboard and manage prospect/customer statuses, you must configure a secure PIN.
   Create a `.env.development` (for local testing) or `.env.production` (for production) file in the root directory:
   ```env
   ADMIN_PIN=your_secret_password_here
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   - **Main Website:** Open [http://localhost:8080](http://localhost:8080)
   - **Admin Dashboard:** Visit [http://localhost:8080/adminmng](http://localhost:8080/adminmng) and enter your `ADMIN_PIN` to see all interested students.

<br />

<img width="727" height="552" alt="Platform Interface" src="https://github.com/user-attachments/assets/39955e4d-9420-4180-ba62-d87a67ed9fdd" />
