export type SceneId = "hero" | "meet" | "plate" | "table" | "chaining" | "celebration" | "closing";
export type MediaEntry = { enabled?: boolean; mode?: "scrub" | "loop" | "still"; mp4?: string; webm?: string; mobile?: string; poster?: string };
export type CharEntry = { enabled?: boolean; src: string; alt?: string };
export type Manifest = { scenes: Partial<Record<SceneId, MediaEntry>>; characters: Record<string, CharEntry> };

export const ASSET_BASE = "/assets/";
let cache: Promise<Manifest | null> | null = null;

export function loadManifest(): Promise<Manifest | null> {
  cache ??= fetch(ASSET_BASE + "manifest.json")
    .then((r) => (r.ok ? (r.json() as Promise<Manifest>) : null))
    .catch(() => null);
  return cache;
}
