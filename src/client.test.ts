import { describe, it, expect } from 'vitest';
import { createClient } from './index';

describe('OzyBaseClient', () => {
    it('should initialize with a URL', () => {
        const client = createClient('http://localhost:8090');
        expect(client).toBeDefined();
    });

    it('should have auth defined', () => {
        const client = createClient('http://localhost:8090');
        expect(client.auth).toBeDefined();
    });
});
