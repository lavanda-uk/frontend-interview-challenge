# 🧹 Housekeeper App

A housekeeping management app that allows staff to track cleaning status, demonstrate property knowledge, and report issues directly against units.

---

## 📱 Overview

The Housekeeper App allows users to:

- View **Dirty (Uncleaned)** units
- Mark units as **Clean**
- Capture cleaning details (name, date, time)
- View **Cleaned** units
- Mark units back to **Dirty**
- Report issues against units
- Search units by name
- Filter dirty units by urgency

The app is organized into two main tabs:

- **Dirty** (default tab)
- **Clean**

---

# 🚀 App Flow

## 1️⃣ Launch App

- User opens the app
- App lands on the **Main Screen**
- Default tab is **Dirty (Uncleaned list)**

---

# 🧾 Dirty Units Tab

## What You See

- List of dirty units
- Each unit displays:
  - Unit name (e.g., Deluxe Suite 001)
  - Urgency level (Easy, Medium, Urgent)
  - **"Mark Clean"** button
  - **"Report Issue"** option
- Search input field
- Urgency filter dropdown

---

# ✅ Mark Unit as Clean

When marking a unit as clean, additional cleaning details must be captured.

## Step 1: Tap "Mark Clean"

A modal dialog opens containing:

- **Cleaner Name** (required)
- **Cleaning Date** (required)
- **Cleaning Time** (required)

## Step 2: Confirmation

After entering the required information, the user confirms:

**Mark clean?**  
_Are you sure you want to mark this unit clean?_

Options:
- **Cancel** → Action cancelled
- **Confirm** → Continue

## Step 3: System Will

- Update unit status to `Clean`
- Store:
  - Cleaner name
  - Cleaning date
  - Cleaning time
- Move unit to the **Clean tab**

---

## 🛠 Report Issue (From Dirty Tab)

Housekeepers can report issues while cleaning to demonstrate property knowledge.

### Steps:

1. Tap **"Report Issue"**
2. Issue form opens
3. User enters:
  - **Issue Name** (required)
  - **Issue Description** (required)
4. Submit

### System Will:

- Attach issue to the unit ID
- Store:
  - Unit ID
  - Issue name
  - Issue description
  - Reported by (housekeeper name)
  - Timestamp
- Keep unit in current status

---

# 🧽 Clean Units Tab

## What You See

- List of clean units
- Each unit displays:
  - Unit name
  - `Cleaned by {Name}`
  - `Date: {Cleaning Date}`
  - `Time: {Cleaning Time}`
  - **"Mark Dirty"** button
  - **"Report Issue"** option
- Search input field

⚠️ No urgency filter in Clean tab  
(Urgency only applies to units that require cleaning.)

---

# 🔁 Mark Unit as Dirty

1. Tap **"Mark Dirty"**
2. Confirmation modal appears:

   **Mark dirty?**  
   _Are you sure you want to mark this unit dirty?_

3. Select:
  - **Cancel** → Action cancelled
  - **Confirm** → Continue

4. System will:
  - Update unit status to `Dirty`
  - Remove cleaning metadata:
    - Cleaner name
    - Cleaning date
    - Cleaning time
  - Move unit back to the **Dirty tab**

---

# 🔎 Filtering & Search

## Dirty Tab

- Search by unit name
- Filter by urgency:
  - Easy
  - Medium
  - Urgent

## Clean Tab

- Search by unit name only
- No urgency filter

---

# 🧠 Status Logic

| Action        | Result |
|--------------|--------|
| Mark Clean   | Status → Clean |
| Store Cleaner Info | Name + Date + Time saved |
| Mark Dirty   | Status → Dirty |
| Remove Cleaner Info | Cleaning metadata cleared |
| Report Issue | Issue attached to unit |

---

# 🗂 Data Models

## Unit

```ts
interface Unit {
  id: string;
  name: string;
  status: 'dirty' | 'clean';
  urgency?: 'easy' | 'medium' | 'urgent'; // Only relevant when dirty

  cleanedBy?: string;
  cleanedDate?: string; // ISO date string (YYYY-MM-DD)
  cleanedTime?: string; // HH:mm format
}
# frontend-interview-challenge
