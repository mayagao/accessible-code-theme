import ColorInputForm from './colorInputForm'
import lightThemeTemplate from '../api/lightThemeTemplate.json'

const buildProps = (overrides = {}) => ({
  updateSyntaxColor: jest.fn(),
  updateBgColor: jest.fn(),
  bgColor: '#ffffff',
  themeName: 'my theme',
  themeTemplate: lightThemeTemplate,
  ...overrides
})

describe('ColorInputForm export', () => {
  const originalWindowOpen = window.open

  afterEach(() => {
    window.open = originalWindowOpen
  })

  it('renders exported css as text in popup window', () => {
    const pre = { textContent: '' }
    const popupDocument = {
      createElement: jest.fn(() => pre),
      body: {
        replaceChildren: jest.fn()
      },
      write: jest.fn()
    }

    window.open = jest.fn(() => ({ document: popupDocument }))

    const form = new ColorInputForm(buildProps({
      bgColor: '#fff;}</pre><script>alert("xss")</script><pre>'
    }))
    form.onClick({ preventDefault: jest.fn() })

    expect(popupDocument.createElement).toHaveBeenCalledWith('pre')
    expect(pre.textContent).toContain('</pre><script>alert("xss")</script><pre>')
    expect(popupDocument.body.replaceChildren).toHaveBeenCalledWith(pre)
    expect(popupDocument.write).not.toHaveBeenCalled()
  })

  it('does not throw when popup window is blocked', () => {
    window.open = jest.fn(() => null)

    const form = new ColorInputForm(buildProps())

    expect(() => form.onClick({ preventDefault: jest.fn() })).not.toThrow()
  })
})
