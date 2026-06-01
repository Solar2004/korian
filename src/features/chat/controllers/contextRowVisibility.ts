export function updateContextRowHasContent(contextRowEl: HTMLElement): void {
  const editorIndicator = contextRowEl.querySelector('.korian-selection-indicator');
  const browserIndicator = contextRowEl.querySelector('.korian-browser-selection-indicator');
  const canvasIndicator = contextRowEl.querySelector('.korian-canvas-indicator');
  const fileIndicator = contextRowEl.querySelector('.korian-file-indicator');
  const imagePreview = contextRowEl.querySelector('.korian-image-preview');

  const hasEditorSelection = !!editorIndicator && !editorIndicator.hasClass('korian-hidden');
  const hasBrowserSelection = !!browserIndicator && !browserIndicator.hasClass('korian-hidden');
  const hasCanvasSelection = !!canvasIndicator && !canvasIndicator.hasClass('korian-hidden');
  const hasFileChips = !!fileIndicator && fileIndicator.hasClass('korian-visible-flex');
  const hasImageChips = !!imagePreview && imagePreview.hasClass('korian-visible-flex');

  contextRowEl.classList.toggle(
    'has-content',
    hasEditorSelection || hasBrowserSelection || hasCanvasSelection || hasFileChips || hasImageChips
  );
}
