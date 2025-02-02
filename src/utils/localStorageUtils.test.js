// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/. 

import { expect, describe, it } from 'vitest';

import {
    getLocalSettings,
    setLocalSettings,
    clearLocalSettings,
} from './localStorageUtils';

describe('local storage utils', () => {
    const mockSettings = {
        duplex: false,
        format: 'standardsig',
        sigsize: 8,
        lockratio: true,
        papersize: 'A4',
        pagelayout: 'octavo',
    };

    it('gets empty settings from local storage if none have been set', () => {
        try {
            const expected = {};
            const actual = getLocalSettings();
            expect(actual).toEqual(expected);
        } catch (error) {
            expect(error).toBeFalsy();
        }
    });

    it('sets local settings and gets those settings', () => {
        try {
            const expected = mockSettings;
            setLocalSettings(mockSettings);
            const actual = getLocalSettings();
            expect(actual).toEqual(expected);
        } catch (error) {
            expect(error).toBeFalsy();
        }
    });

    it('removes local settings', () => {
        try {
            const expected = {};
            setLocalSettings(mockSettings);
            clearLocalSettings();
            const actual = getLocalSettings();
            expect(actual).toEqual(expected);
        } catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
