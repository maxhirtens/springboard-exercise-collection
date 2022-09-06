def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    new = list(phrase)
    new.reverse()
    str = ''.join(new)
    print(f"'{str}'")
