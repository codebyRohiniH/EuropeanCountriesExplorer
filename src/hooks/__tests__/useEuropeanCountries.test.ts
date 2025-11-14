import { renderHook, act, waitFor } from '@testing-library/react-native';
import { useEuropeanCountries } from '../useEuropeanCountries';
import { fetchEuropeanCountries } from '../../api/CountriesApi';

jest.mock('../../api/CountriesApi', () => ({
  fetchEuropeanCountries: jest.fn(),
}));

const mockCountries = [
  { name: { common: 'Germany' }, capital: ['Berlin'], population: 83000000, area: 357022, flags: { png: 'germany.png' } },
  { name: { common: 'France' }, capital: ['Paris'], population: 67000000, area: 551695, flags: { png: 'france.png' } },
  { name: { common: 'Finland' }, capital: ['Helsinki'], population: 5500000, area: 338424, flags: { png: 'finland.png' } },
];

describe('useEuropeanCountries', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return countries after successful fetch', async () => {
    // GIVEN
    (fetchEuropeanCountries as jest.Mock).mockResolvedValueOnce(mockCountries);
    // WHEN
    const { result } = renderHook(() => useEuropeanCountries());
    // THEN
    expect(result.current.loading).toBe(true);
    
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.countries).toEqual(mockCountries);
    expect(result.current.error).toBe("");
  });

  it('should set error when fetch fails', async () => {
    // GIVEN
    (fetchEuropeanCountries as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
    // WHEN
    const { result  } = renderHook(() => useEuropeanCountries());

    await waitFor(() => expect(result.current.loading).toBe(false));
    // THEN
    expect(result.current.loading).toBe(false);
    expect(result.current.countries).toEqual([]);
    expect(result.current.error).toBe('Network error');
  });

  it('should filter countries by search', async () => {
    // GIVEN
    (fetchEuropeanCountries as jest.Mock).mockResolvedValueOnce(mockCountries);
    const { result } = renderHook(() => useEuropeanCountries());
    await waitFor(() => expect(result.current.loading).toBe(false));
    // WHEN
    act(() => {
      result.current.setNameSearch('fin');
    });
    // THEN
    expect(result.current.countries).toEqual([
      expect.objectContaining({ name: { common: 'Finland' } })
    ]);
  });

  it('should return all countries when search is empty', async () => {
    // GIVEN
    (fetchEuropeanCountries as jest.Mock).mockResolvedValueOnce(mockCountries);
    const { result } = renderHook(() => useEuropeanCountries());
    await waitFor(() => expect(result.current.loading).toBe(false));
    // WHEN
    act(() => {
      result.current.setNameSearch('');
    });
    // THEN
    expect(result.current.countries).toEqual(mockCountries);
  });
});
