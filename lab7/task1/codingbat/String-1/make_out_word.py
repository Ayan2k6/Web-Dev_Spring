def make_out_word(out, word):
    # First two chars + word + last two chars
    return out[:2] + word + out[2:]