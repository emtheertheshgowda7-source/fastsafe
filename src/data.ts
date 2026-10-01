export type Role = 'DRIVER' | 'OPERATOR' | 'ADMIN';
export type RescueStep = 'zone' | 'plate' | 'vehicle' | 'otp' | 'toll' | 'payment' | 'qr' | 'verified' | 'incident';

export const demo = {
  user: { name: 'Arjun Rao', initials: 'AR', role: 'DRIVER' as Role, vehicle: 'KA-05-AB-1234', phone: '+91 98•••• 2041' },
  fastag: { balance: 1240, status: 'Active', lastDeduction: 'Maddur Toll Plaza' },
  tolls: [
    { name: 'Kengeri Toll Plaza', short: 'Kengeri', amount: 45, wait: '2 min', distance: '12 km', id: 'FS-KNG-1042', status: 'Clear' },
    { name: 'Maddur Toll Plaza', short: 'Maddur', amount: 65, wait: '6 min', distance: '46 km', id: 'FS-MDR-1156', status: 'Moderate' },
    { name: 'Mandya Toll Plaza', short: 'Mandya', amount: 55, wait: '3 min', distance: '79 km', id: 'FS-MDY-1234', status: 'Clear' },
  ],
  transactions: [
    { plaza: 'Maddur Toll Plaza', date: '28 Sep 2026', time: '11:42 AM', amount: 65, id: 'FS-MDR-1156', balance: 1240, status: 'Completed' },
    { plaza: 'Mandya Toll Plaza', date: '21 Sep 2026', time: '3:18 PM', amount: 55, id: 'FS-MDY-1234', balance: 1305, status: 'Completed' },
    { plaza: 'Kengeri Toll Plaza', date: '14 Sep 2026', time: '9:04 AM', amount: 45, id: 'FS-KNG-1042', balance: 1360, status: 'Completed' },
  ],
  services: [
    { icon: 'fuel', name: 'Shell Highway Fuel', type: 'Petrol station', distance: '1.8 km', detail: 'Bengaluru–Mysuru Rd' },
    { icon: 'bolt', name: 'Tata Power ChargeZone', type: 'EV charging', distance: '3.2 km', detail: '2 fast chargers available' },
    { icon: 'cross', name: 'Columbia Asia Hospital', type: 'Hospital', distance: '4.6 km', detail: 'Emergency care' },
    { icon: 'wrench', name: 'Maddur Highway Assist', type: 'Mechanic & towing', distance: '5.1 km', detail: 'Open 24 hours' },
  ],
};

export const money = (value: number) => `₹${value.toLocaleString('en-IN')}`;
