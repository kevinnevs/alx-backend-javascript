import ClassRoom from './0-classroom.js';

/**
 * Create an array of classroom with a specific size
 * @returns an array
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
