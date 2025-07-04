function generateTicketNumber(count) {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
    return `${dateStr}-${String(count + 1).padStart(4, '0')}`;
}

export default generateTicketNumber